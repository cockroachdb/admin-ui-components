import classNames from "classnames/bind";
import styles from "../statementsTable/statementsTable.module.scss";
import statementsPageStyles from "../statementsPage/statementsPage.module.scss";
import sortedTableStyles from "../sortabletable/sortabletable.module.scss";

const pageCx = classNames.bind(statementsPageStyles);
const cx = classNames.bind(styles);
const sortedTableCx = classNames.bind(sortedTableStyles);

export const paginationClasses = {
  jump: cx("_pg-jump"),
  dots: cx("_jump-dots"),
};

export const baseHeadingClasses = {
  wrapper: pageCx("section"),
  tableName: pageCx("base-heading"),
};

export const statisticsClasses = {
  statistic: pageCx("cl-table-statistic"),
  countTitle: pageCx("cl-count-title"),
  lastCleared: pageCx("last-cleared-title"),
  tableContainerClass: sortedTableCx("cl-table-container"),
};
