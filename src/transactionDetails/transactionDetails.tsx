import React from "react";
import { AggregateStatistics } from "../statementsTable";
import { makeStatementsColumns } from "../statementsTable";
import { SortedTable } from "../sortedtable";
import { ActivateDiagnosticsModalRef } from "../statementsDiagnostics";
import { ISortedTablePagination } from "../sortedtable";
import { SortSetting } from "../sortabletable";
import { TransactionsPagePagination } from "../transactionsPage/transactionsPagePagination";
import { TransactionsTableStatistics } from "../transactionsTable/transactionsTableStatistic";
import { baseHeadingClasses } from "../transactionsPage/transactionsPageClasses";
import { Button } from "../button";
import { statementsText } from "./transactionDetailsClasses";
import { collectStatementsText } from "src/transactionsPage/utils";
import { tableClasses } from "../transactionsTable/transactionsTableClasses";

const { containerClass } = tableClasses;

interface TransactionDetailsProps {
  statements?: AggregateStatistics[];
  lastReset?: string;
  handleDetails: (statementIds: string[] | null) => void;
}

interface TState {
  sortSetting: SortSetting;
  pagination: ISortedTablePagination;
}

export class TransactionDetails extends React.Component<
  TransactionDetailsProps,
  TState
> {
  state: TState = {
    sortSetting: {
      sortKey: 2,
      ascending: false,
    },
    pagination: {
      pageSize: 10,
      current: 1,
    },
  };
  activateDiagnosticsRef: React.RefObject<
    ActivateDiagnosticsModalRef
  > = React.createRef();

  onChangeSortSetting = (ss: SortSetting) => {
    this.setState({
      sortSetting: ss,
    });
  };

  onChangePage = (current: number) => {
    const { pagination } = this.state;
    this.setState({ pagination: { ...pagination, current } });
  };

  render() {
    const { statements, lastReset, handleDetails } = this.props;
    const { sortSetting, pagination } = this.state;
    const statementsSummary = collectStatementsText(statements);

    return statements ? (
      <div>
        <Button type="flat" onClick={() => handleDetails(null)}>
          All transactions
        </Button>
        <section className={baseHeadingClasses.wrapper}>
          <h1 className={baseHeadingClasses.tableName}>Statements</h1>
        </section>
        <section className={containerClass}>
          <div className={statementsText}>{statementsSummary}</div>
          <TransactionsTableStatistics
            pagination={pagination}
            totalCount={statements.length}
            lastReset={lastReset}
            search={""}
            arrayItemName={"statements"}
          />
          <SortedTable
            data={statements}
            columns={makeStatementsColumns(
              statements,
              "",
              "",
              this.activateDiagnosticsRef,
            )}
            className="statements-table"
            sortSetting={sortSetting}
            onChangeSortSetting={this.onChangeSortSetting}
          />
        </section>
        <TransactionsPagePagination
          pageSize={pagination.pageSize}
          current={pagination.current}
          total={statements.length}
          onChange={this.onChangePage}
        />
      </div>
    ) : null;
  }
}
