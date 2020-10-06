import React from "react";
import { storiesOf } from "@storybook/react";

import { EmptyTablePlaceholder } from "./emptyTablePlaceholder";
import emptyListResultsImg from "../assets/emptyState/empty-list-results.svg";
import notFoundImg from "../assets/emptyState/not-found-404.svg";
import { Button } from "src";
import SpinIcon from "../icon/spin";

storiesOf("EmptyTablePlaceholder", module)
  .add("default", () => <EmptyTablePlaceholder />)
  .add("with icon", () => <EmptyTablePlaceholder icon={emptyListResultsImg} />)
  .add("with message", () => (
    <EmptyTablePlaceholder
      icon={emptyListResultsImg}
      message={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
    />
  ))
  .add("with button", () => (
    <EmptyTablePlaceholder
      icon={emptyListResultsImg}
      message={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
      footer={<Button type="primary">Activate</Button>}
    />
  ))
  .add("no backup found", () => (
    <EmptyTablePlaceholder
      icon={notFoundImg}
      title="No backup found"
      message="The backup you’re looking for does not exist."
    />
  ))
  .add("with SVG element as icon", () => {
    return (
      <EmptyTablePlaceholder
        icon={<SpinIcon width={72} height={72} />}
        title="It's SVG icon"
      />
    );
  });
