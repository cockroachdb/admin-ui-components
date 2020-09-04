import classNames from "classnames/bind";
import styles from "../barCharts/barCharts.module.scss";
import { stdDevLong } from "src/util/appStats";
import { Duration } from "src/util/format";
import * as protos from "src/js/protos";
import {
  longToInt,
  makeBarChart,
  approximify,
  formatTwoPlaces,
} from "../barCharts";

type StatementStatistics = protos.cockroach.server.serverpb.StatementsResponse.ICollectedStatementStatistics;
const cx = classNames.bind(styles);

function bar(name: string, value: (d: StatementStatistics) => number) {
  return { name, value };
}

const retryBarT = [
  bar("count-retry", d => longToInt(d.stats_data.stats.max_retries)),
];

const countBarT = [
  bar("count-first-try", d => longToInt(d.stats_data.stats.count)),
];

const latencyBarT = [
  bar("bar-chart__service-lat", d => d.stats_data.stats.service_lat.mean),
];
const latencyStdDevT = bar(cx("bar-chart__overall-dev"), d =>
  stdDevLong(d.stats_data.stats.service_lat, d.stats_data.stats.count),
);

const rowsBarT = [bar("rows", d => d.stats_data.stats.num_rows.mean)];
const rowsStdDevT = bar(cx("rows-dev"), d =>
  stdDevLong(d.stats_data.stats.num_rows, d.stats_data.stats.count),
);

export const transactionsCountBarChart = makeBarChart(
  "grey",
  countBarT,
  approximify,
);
export const transactionsRetryBarChart = makeBarChart(
  "red",
  retryBarT,
  approximify,
);
export const transactionsRowsBarChart = makeBarChart(
  "grey",
  rowsBarT,
  approximify,
  rowsStdDevT,
  formatTwoPlaces,
);
export const transactionsLatencyBarChart = makeBarChart(
  "grey",
  latencyBarT,
  v => Duration(v * 1e9),
  latencyStdDevT,
);
