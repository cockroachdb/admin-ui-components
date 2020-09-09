import React from "react";
import { Pagination, Icon } from "antd";
import { paginationClasses } from "../transactionsPageClasses";

const { jump, dots } = paginationClasses;

interface PaginationProps {
  pageSize: number;
  current: number;
  total: number;
  onChange: (current: number) => void;
}

const customIcons = (
  _page: number,
  type: "page" | "prev" | "next" | "jump-prev" | "jump-next",
  originalElement: React.ReactNode,
) => {
  switch (type) {
    case "jump-prev":
      return (
        <div className={jump}>
          <Icon type="left" />
          <span className={dots}>•••</span>
        </div>
      );
    case "jump-next":
      return (
        <div className={jump}>
          <span className={dots}>•••</span>
          <Icon type="right" />
        </div>
      );
    default:
      return originalElement;
  }
};

export const TransactionsPagePagination: React.FC<PaginationProps> = ({
  pageSize,
  current,
  total,
  onChange,
}) => {
  return (
    <Pagination
      size="small"
      itemRender={customIcons}
      pageSize={pageSize}
      current={current}
      total={total}
      onChange={onChange}
      hideOnSinglePage
    />
  );
};
