import React from "react";
import { action } from "@storybook/addon-actions";

import Link from "./Link";

export default {
  title: "Link",
  component: Link,
};

export const Example = () => (
  <section style={{ padding: "2rem" }}>
    <h1>Link</h1>
    <Link disabled={true} onClick={action("Link Clicked")}>
      A Link
    </Link>
  </section>
);
