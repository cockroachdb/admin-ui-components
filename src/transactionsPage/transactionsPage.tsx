import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { TransactionsPageHeader } from "./transactionsPageHeader";
import { TransactionsTable } from "../transactionsTable";

import { SortSetting, ISortedTablePagination } from "../sortedtable";
import { TransactionsPagePagination } from "./transactionsPagePagination";
import { getAppNames } from "./utils";
import {
  addTransactionStatements,
  searchTransactionsData,
  filterTransactions,
} from "./utils";

export interface Filters {
  app?: string;
  transactionsType?: string;
  timeNumber?: string;
  timeUnit?: string;
  fullScans?: boolean;
  distributed?: boolean;
}

interface TState {
  sortSetting: SortSetting;
  pagination: ISortedTablePagination;
  search?: string;
  filters?: Filters;
  statementIds: string[] | null;
}

export interface Stats {
  mean: number;
  squared_diffs: number;
}
export interface Transaction {
  stats_data: {
    statement_ids: string[];
    app: string;
    stats: {
      count: string;
      max_retries: string;
      num_rows: Stats;
      service_lat: Stats;
      retry_lat: Stats;
      commit_lat: Stats;
    };
  };
  node_id: number;
  transactionStatements?: string;
}

export class TransactionsPage extends React.Component<
  RouteComponentProps & { data: any },
  TState
> {
  state: TState = {
    sortSetting: {
      sortKey: 3,
      ascending: false,
    },
    pagination: {
      pageSize: 10,
      current: 1,
    },
    search: "",
    statementIds: null,
  };

  onChangeSortSetting = (ss: SortSetting) => {
    this.setState({
      sortSetting: ss,
    });
  };

  onChangePage = (current: number) => {
    const { pagination } = this.state;
    this.setState({ pagination: { ...pagination, current } });
  };

  resetPagination = () => {
    this.setState(prevState => {
      return {
        pagination: {
          current: 1,
          pageSize: prevState.pagination.pageSize,
        },
      };
    });
  };

  onClearSearchField = () => {
    this.setState({ search: "" });
  };

  onSubmitSearchField = (search: string) => {
    this.setState({ search });
    this.resetPagination();
  };

  onSubmitFilters = (filters: Filters) => {
    this.setState({
      filters: {
        ...this.state.filters,
        ...filters,
      },
    });
    this.resetPagination();
  };

  handleDetails = (statementIds: string[]) => {
    this.setState({ statementIds });
  };

  render() {
    if (!this.props.data.transactions) return <pre>test</pre>;
    const { statements, transactions, lastReset } = this.props.data;
    const { pagination, search, filters, statementIds } = this.state;
    const appNames = getAppNames(transactions);
    const data = searchTransactionsData(
      search,
      addTransactionStatements(transactions, statements),
    );
    const filteredData = filterTransactions(data, filters);
    return !statementIds ? (
      <div>
        <TransactionsPageHeader
          onSubmit={this.onSubmitSearchField}
          onClear={this.onClearSearchField}
          search={search}
          activeFilters={filteredData.activeFilters}
          onSubmitFilters={this.onSubmitFilters}
          appNames={appNames}
        />
        <TransactionsTable
          data={filteredData.transactions}
          lastReset={lastReset}
          sortSetting={this.state.sortSetting}
          onChangeSortSetting={this.onChangeSortSetting}
          pagination={pagination}
          handleDetails={this.handleDetails}
        />
        <TransactionsPagePagination
          pageSize={pagination.pageSize}
          current={pagination.current}
          total={filteredData.transactions.length}
          onChange={this.onChangePage}
        />
      </div>
    ) : (
      <h1>IDS</h1>
    );
  }
}
