import classNames from "classnames/bind";
import styles from "../statementsTable/statementsTable.module.scss";
import statementsPageStyles from "../statementsPage/statementsPage.module.scss";

const statementsPageCx = classNames.bind(statementsPageStyles);
const cx = classNames.bind(styles);

export const paginationClasses = {
  jump: cx("_pg-jump"),
  dots: cx("_jump-dots"),
};

export const baseHeadingClasses = {
  wrapper: statementsPageCx("section"),
  tableName: statementsPageCx("base-heading"),
};
