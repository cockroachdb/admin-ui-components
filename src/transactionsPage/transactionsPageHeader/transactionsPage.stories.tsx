import React from "react";
import { storiesOf } from "@storybook/react";

import { TransactionsPageHeader } from ".";

storiesOf("Transactions Page", module).add("Header", () => (
  <TransactionsPageHeader />
));
