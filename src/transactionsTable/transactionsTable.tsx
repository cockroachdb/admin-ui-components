import React from "react";
import { SortedTable } from "../sortedtable";
import { ISortedTablePagination } from "../sortedtable";
import { Transaction } from "../transactionsPage";
// import {
//   transactionsRetryBarChart,
//   transactionsCountBarChart,
//   transactionsLatencyBarChart,
//   transactionsRowsBarChart,
// } from "./transactionsBarCharts";
import {
  transactionsRetryBarChart,
  transactionsCountBarChart,
  transactionsLatencyBarChart,
  transactionsRowsBarChart,
} from "../barCharts";
import { StatementTableTitle } from "../statementsTable/statementsTableContent";
import { TransactionsTableStatistics } from "./transactionsTableStatistic";
import { longToInt, createLabel } from "./utils";
import { tableClasses } from "./transactionsTableClasses";
import { textCell, titleCells } from "./transactionsCells";
import { FixLong } from "src/util";
import { SortSetting } from "../sortabletable";

interface TransactionsTable {
  data: Transaction[];
  sortSetting: SortSetting;
  onChangeSortSetting: (ss: SortSetting) => void;
  pagination: ISortedTablePagination;
  lastReset: Date;
  search?: string;
  handleDetails: (statementIds: string[] | null) => void;
}

const { containerClass, latencyClasses, RowsAffectedClasses } = tableClasses;

export const TransactionsTable: React.FC<TransactionsTable> = props => {
  const { data, pagination, lastReset, search, handleDetails } = props;
  const retryBar = transactionsRetryBarChart(data);
  const countBar = transactionsCountBarChart(data);
  const latencyBar = transactionsLatencyBarChart(data, latencyClasses.barChart);
  const rowsBar = transactionsRowsBarChart(data, RowsAffectedClasses.barChart);
  const columns = [
    {
      name: "transactions",
      title: titleCells.transactions,
      cell: (item: Transaction) =>
        textCell({
          statement: item.transactionStatements,
          transactionIds: item.stats_data.statement_ids,
          handleDetails,
        }),
      sort: (item: Transaction) => createLabel(item.transactionStatements),
    },
    {
      name: "statements",
      title: titleCells.statements,
      cell: (item: Transaction) => item.stats_data.statement_ids.length,
      sort: (item: Transaction) => item.stats_data.statement_ids.length,
    },
    {
      name: "retries",
      title: StatementTableTitle.retries,
      cell: retryBar,
      sort: (item: Transaction) =>
        longToInt(Number(item.stats_data.stats.max_retries)),
    },
    {
      name: "execution count",
      title: StatementTableTitle.executionCount,
      cell: countBar,
      sort: (item: Transaction) => FixLong(Number(item.stats_data.stats.count)),
    },
    {
      name: "rows affected",
      title: StatementTableTitle.rowsAffected,
      cell: rowsBar,
      className: RowsAffectedClasses.column,
      sort: (item: Transaction) => item.stats_data.stats.num_rows.mean,
    },
    {
      name: "latency",
      title: StatementTableTitle.latency,
      cell: latencyBar,
      className: latencyClasses.column,
      sort: (item: Transaction) => item.stats_data.stats.service_lat.mean,
    },
  ];
  return (
    <section className={containerClass}>
      <TransactionsTableStatistics
        pagination={pagination}
        totalCount={data.length}
        lastReset={lastReset}
        search={search}
        arrayItemName={"transactions"}
      />
      <SortedTable
        data={data}
        columns={columns}
        className="statements-table"
        {...props}
      />
    </section>
  );
};

TransactionsTable.defaultProps = {};
