import React from "react";
import { storiesOf } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import {
  makeStatementsColumns,
  StatementsSortedTable,
} from "./statementsTable";
import statementsPagePropsFixture from "../statementsPage/components/statementsPage.fixture";

const { statements } = statementsPagePropsFixture;

storiesOf("StatementsSortedTable", module)
  .addDecorator(storyFn => <MemoryRouter>{storyFn()}</MemoryRouter>)
  .add("with data", () => (
    <StatementsSortedTable
      className="statements-table"
      data={statements}
      columns={makeStatementsColumns(statements, "(internal)")}
      sortSetting={{
        ascending: false,
        sortKey: 3,
      }}
      pagination={{
        pageSize: 20,
        current: 1,
      }}
    />
  ))
  .add("empty table", () => <StatementsSortedTable empty />);
