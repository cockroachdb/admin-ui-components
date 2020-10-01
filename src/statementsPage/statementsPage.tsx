import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { Icon, Pagination } from "antd";
import { isNil, merge, forIn } from "lodash";
import moment from "moment";
import Helmet from "react-helmet";
import classNames from "classnames/bind";

import {
  paginationPageCount,
  Dropdown,
  Loading,
  PageConfig,
  PageConfigItem,
  SortSetting,
  Search,
  Text,
  TextTypes,
} from "src/index";
import { DATE_FORMAT, appAttr, getMatchParamByName } from "src/util";
import {
  AggregateStatistics,
  makeStatementsColumns,
  StatementsSortedTable,
} from "../statementsTable";
import {
  ActivateStatementDiagnosticsModal,
  ActivateDiagnosticsModalRef,
} from "src/statementsDiagnostics";
import { ISortedTablePagination } from "../sortedtable";
import { statementsTable } from "src/util/docs";
import styles from "./statementsPage.module.scss";
import sortableTableStyles from "../sortabletable/sortabletable.module.scss";

const cx = classNames.bind(styles);
const sortableTableCx = classNames.bind(sortableTableStyles);

interface OwnProps {
  statements: AggregateStatistics[];
  statementsError: Error | null;
  apps: string[];
  totalFingerprints: number;
  lastReset: string;
  refreshStatements: () => void;
  refreshStatementDiagnosticsRequests: () => void;
  dismissAlertMessage: () => void;
  onActivateStatementDiagnostics: (statement: string) => void;
  onDiagnosticsModalOpen: (statement: string) => void;
  onSearchComplete?: (results: AggregateStatistics[]) => void;
  onPageChanged?: (newPage: number) => void;
  onSortingChange?: (
    name: string,
    columnTitle: string,
    ascending: boolean,
  ) => void;
}

export interface StatementsPageState {
  sortSetting: SortSetting;
  search?: string;
  pagination: ISortedTablePagination;
}

export type StatementsPageProps = OwnProps & RouteComponentProps<any>;

export class StatementsPage extends React.Component<
  StatementsPageProps,
  StatementsPageState
> {
  activateDiagnosticsRef: React.RefObject<ActivateDiagnosticsModalRef>;

  constructor(props: StatementsPageProps) {
    super(props);
    const defaultState = {
      sortSetting: {
        sortKey: 3, // Sort by Execution Count column as default option
        ascending: false,
      },
      pagination: {
        pageSize: 20,
        current: 1,
      },
      search: "",
    };

    const stateFromHistory = this.getStateFromHistory();
    this.state = merge(defaultState, stateFromHistory);
    this.activateDiagnosticsRef = React.createRef();
  }

  getStateFromHistory = (): Partial<StatementsPageState> => {
    const { history } = this.props;
    const searchParams = new URLSearchParams(history.location.search);
    const sortKey = searchParams.get("sortKey") || undefined;
    const ascending = searchParams.get("ascending") || undefined;
    const searchQuery = searchParams.get("q") || undefined;

    return {
      sortSetting: {
        sortKey,
        ascending: Boolean(ascending),
      },
      search: searchQuery,
    };
  };

  syncHistory = (params: Record<string, string | undefined>) => {
    const { history } = this.props;
    const currentSearchParams = new URLSearchParams(history.location.search);

    forIn(params, (value, key) => {
      if (!value) {
        currentSearchParams.delete(key);
      } else {
        currentSearchParams.set(key, value);
      }
    });

    history.location.search = currentSearchParams.toString();
    history.replace(history.location);
  };

  changeSortSetting = (ss: SortSetting) => {
    this.setState({
      sortSetting: ss,
    });

    this.syncHistory({
      sortKey: ss.sortKey,
      ascending: Boolean(ss.ascending).toString(),
    });
    this.props.onSortingChange(
      "statements-table",
      ss.columnTitle,
      ss.ascending,
    );
  };

  selectApp = (value: string) => {
    const { history } = this.props;
    history.location.pathname = `/statements/${encodeURIComponent(value)}`;
    history.replace(history.location);
    this.resetPagination();
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

  componentDidMount() {
    this.props.refreshStatements();
    this.props.refreshStatementDiagnosticsRequests();
  }

  componentDidUpdate = (
    __: StatementsPageProps,
    prevState: StatementsPageState,
  ) => {
    if (this.state.search && this.state.search !== prevState.search) {
      this.props.onSearchComplete(this.filteredStatementsData());
    }
    this.props.refreshStatements();
    this.props.refreshStatementDiagnosticsRequests();
  };

  componentWillUnmount() {
    this.props.dismissAlertMessage();
  }

  onChangePage = (current: number) => {
    const { pagination } = this.state;
    this.setState({ pagination: { ...pagination, current } });
    this.props.onPageChanged(current);
  };

  onSubmitSearchField = (search: string) => {
    this.setState({ search });
    this.resetPagination();
    this.syncHistory({
      q: search,
    });
  };

  onClearSearchField = () => {
    this.setState({ search: "" });
    this.syncHistory({
      q: undefined,
    });
  };

  filteredStatementsData = () => {
    const { search } = this.state;
    const { statements } = this.props;
    return statements.filter(statement =>
      search
        .split(" ")
        .every(val =>
          statement.label.toLowerCase().includes(val.toLowerCase()),
        ),
    );
  };

  renderPage = (
    _page: number,
    type: "page" | "prev" | "next" | "jump-prev" | "jump-next",
    originalElement: React.ReactNode,
  ) => {
    switch (type) {
      case "jump-prev":
        return (
          <div className={cx("_pg-jump")}>
            <Icon type="left" />
            <span className={cx("_jump-dots")}>•••</span>
          </div>
        );
      case "jump-next":
        return (
          <div className={cx("_pg-jump")}>
            <Icon type="right" />
            <span className={cx("_jump-dots")}>•••</span>
          </div>
        );
      default:
        return originalElement;
    }
  };

  renderLastCleared = () => {
    const { lastReset } = this.props;
    return `Last cleared ${moment.utc(lastReset).format(DATE_FORMAT)}`;
  };

  noStatementResult = () => (
    <>
      <h3 className={sortableTableCx("table__no-results--title")}>
        There are no SQL statements that match your search or filter since this
        page was last cleared.
      </h3>
      <p className={sortableTableCx("table__no-results--description")}>
        <span>
          Statements are cleared every hour by default, or according to your
          configuration.
        </span>
        <a href={statementsTable} target="_blank" rel="noopener noreferrer">
          Learn more
        </a>
      </p>
    </>
  );

  renderStatements = () => {
    const { pagination, search } = this.state;
    const { statements, match } = this.props;
    const appAttrValue = getMatchParamByName(match, appAttr);
    const selectedApp = appAttrValue || "";
    const appOptions = [{ value: "", name: "All" }];
    this.props.apps.forEach(app => appOptions.push({ value: app, name: app }));
    const currentOption = appOptions.find(o => o.value === selectedApp);
    const data = this.filteredStatementsData();
    const totalCount = data.length;
    return (
      <div>
        <PageConfig>
          <PageConfigItem>
            <Search
              onSubmit={this.onSubmitSearchField as any}
              onClear={this.onClearSearchField}
              defaultValue={search}
            />
          </PageConfigItem>
          <PageConfigItem>
            <Dropdown items={appOptions} onChange={this.selectApp}>
              <Text textType={TextTypes.BodyStrong}>
                {`App: ${decodeURIComponent(currentOption.name)}`}
              </Text>
            </Dropdown>
          </PageConfigItem>
        </PageConfig>
        <section className={sortableTableCx("cl-table-container")}>
          <div className={cx("cl-table-statistic")}>
            <h4 className={cx("cl-count-title")}>
              {paginationPageCount(
                { ...pagination, total: totalCount },
                "statements",
                selectedApp,
                search,
              )}
            </h4>
            <h4 className={cx("last-cleared-title")}>
              {this.renderLastCleared()}
            </h4>
          </div>
          <StatementsSortedTable
            className="statements-table"
            data={data}
            columns={makeStatementsColumns(
              statements,
              selectedApp,
              search,
              this.activateDiagnosticsRef,
            )}
            empty={data.length === 0 && search.length === 0}
            emptyProps={{
              title:
                "There are no statements since this page was last cleared.",
              description:
                "Statements help you identify frequently executed or high latency SQL statements. Statements are cleared every hour by default, or according to your configuration.",
              label: "Learn more",
              buttonHref: statementsTable,
            }}
            sortSetting={this.state.sortSetting}
            onChangeSortSetting={this.changeSortSetting}
            renderNoResult={this.noStatementResult()}
            pagination={pagination}
          />
        </section>
        <Pagination
          size="small"
          itemRender={
            this.renderPage as (
              page: number,
              type: "page" | "prev" | "next" | "jump-prev" | "jump-next",
            ) => React.ReactNode
          }
          pageSize={pagination.pageSize}
          current={pagination.current}
          total={data.length}
          onChange={this.onChangePage}
          hideOnSinglePage
        />
      </div>
    );
  };

  render() {
    const {
      match,
      refreshStatementDiagnosticsRequests,
      onActivateStatementDiagnostics,
      onDiagnosticsModalOpen,
    } = this.props;
    const app = getMatchParamByName(match, appAttr);
    return (
      <React.Fragment>
        <Helmet title={app ? `${app} App | Statements` : "Statements"} />

        <section className={cx("section")}>
          <h1 className={cx("base-heading")}>Statements</h1>
        </section>

        <Loading
          loading={isNil(this.props.statements)}
          error={this.props.statementsError}
          render={this.renderStatements}
        />
        <ActivateStatementDiagnosticsModal
          ref={this.activateDiagnosticsRef}
          activate={onActivateStatementDiagnostics}
          refreshDiagnosticsReports={refreshStatementDiagnosticsRequests}
          onOpenModal={onDiagnosticsModalOpen}
        />
      </React.Fragment>
    );
  }
}
