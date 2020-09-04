import React from "react";
import moment from "moment";
import { paginationPageCount } from "src";
import { DATE_FORMAT } from "src/util";
import { statisticsClasses } from "../transactionsTableClasses";
import { ISortedTablePagination } from "../../sortedtable";

const { statistic, coutTitle, lastCleared } = statisticsClasses;

interface TableStatistics {
  pagination: ISortedTablePagination;
  totalCount: number;
  lastReset: string;
  search: string;
}

const renderLastCleared = (lastReset: string) => {
  return `Last cleared ${moment.utc(lastReset).format(DATE_FORMAT)}`;
};

export const TransactionsTableStatistics: React.FC<TableStatistics> = ({
  pagination,
  totalCount,
  lastReset,
  search,
}) => {
  return (
    <div className={statistic}>
      <h4 className={coutTitle}>
        {paginationPageCount(
          { ...pagination, total: totalCount },
          "statements",
          // selectedApp,
          search,
        )}
      </h4>
      <h4 className={lastCleared}>{renderLastCleared(lastReset)}</h4>
    </div>
  );
};
