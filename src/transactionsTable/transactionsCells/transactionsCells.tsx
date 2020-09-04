import React from "react";
import { Link } from "react-router-dom";
import { getHighlightedText, Anchor } from "src/index";
import { Tooltip2 as Tooltip } from "src/tooltip2";
import { summarize, statementsSql } from "src/util";
import { shortStatement } from "../../statementsTable/statementsTable";
import classNames from "classnames/bind";
import styles from "../../statementsTable/statementsTableContent.module.scss";

const cx = classNames.bind(styles);
const descriptionClassName = cx("cl-table-link__description");
const overlayClassName = cx("cl-table-link__statement-tooltip--fixed-width");
const hoverAreaClassName = cx("cl-table-link__tooltip-hover-area");

export const textCell = (statement: string) => {
  const summary = summarize(statement);
  return (
    <Link to={`/${encodeURIComponent(statement)}`}>
      <div>
        <Tooltip
          placement="bottom"
          title={
            <pre className={descriptionClassName}>
              {getHighlightedText(statement, "text")}
            </pre>
          }
          overlayClassName={overlayClassName}
        >
          <div className={hoverAreaClassName}>
            {getHighlightedText(shortStatement(summary, statement), "text")}
          </div>
        </Tooltip>
      </div>
    </Link>
  );
};

export const titleCells = {
  transactions: (
    <Tooltip
      placement="bottom"
      title={
        <div className={cx("tooltip__table--title")}>
          <p>
            {"SQL statement "}
            <Anchor href={statementsSql} target="_blank">
              fingerprint.
            </Anchor>
          </p>
          <p>
            To view additional details of a SQL statement fingerprint, click
            this to open the Statement Details page.
          </p>
        </div>
      }
    >
      Transactions
    </Tooltip>
  ),

  statements: (
    <Tooltip
      placement="bottom"
      title={
        <div className={cx("tooltip__table--title")}>
          <p>FILL THE TEXT</p>
        </div>
      }
    >
      Statements
    </Tooltip>
  ),
};
