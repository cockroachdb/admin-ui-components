import d3 from "d3";
import Long from "long";
import * as protos from "src/js/protos";
import { stdDevLong } from "src/util/appStats";
import { FixLong } from "src/util/fixLong";
import { Duration } from "src/util/format";
import classNames from "classnames/bind";
import styles from "./barCharts.module.scss";
import { statementStatisticsBarChartFactory } from "src/barCharts/statementStatisticsBarChartFactory";

type StatementStatistics = protos.cockroach.server.serverpb.StatementsResponse.ICollectedStatementStatistics;

export const cx = classNames.bind(styles);

export const longToInt = (d: number | Long) =>
  Long.fromValue(FixLong(d)).toInt();

export const formatTwoPlaces = d3.format(".2f");

function bar(name: string, value: (d: StatementStatistics) => number) {
  return { name, value };
}

const countBars = [
  bar("count-first-try", (d: StatementStatistics) =>
    longToInt(d.stats.first_attempt_count),
  ),
];

const retryBars = [
  bar(
    "count-retry",
    (d: StatementStatistics) =>
      longToInt(d.stats.count) - longToInt(d.stats.first_attempt_count),
  ),
];

const rowsBars = [
  bar("rows", (d: StatementStatistics) => d.stats.num_rows.mean),
];

const latencyBars = [
  bar("bar-chart__parse", (d: StatementStatistics) => d.stats.parse_lat.mean),
  bar("bar-chart__plan", (d: StatementStatistics) => d.stats.plan_lat.mean),
  bar("bar-chart__run", (d: StatementStatistics) => d.stats.run_lat.mean),
  bar(
    "bar-chart__overhead",
    (d: StatementStatistics) => d.stats.overhead_lat.mean,
  ),
];

const latencyStdDev = bar(
  cx("bar-chart__overall-dev"),
  (d: StatementStatistics) => stdDevLong(d.stats.service_lat, d.stats.count),
);
const rowsStdDev = bar(cx("rows-dev"), (d: StatementStatistics) =>
  stdDevLong(d.stats.num_rows, d.stats.count),
);

const SCALE_FACTORS: { factor: number; key: string }[] = [
  { factor: 1000000000, key: "b" },
  { factor: 1000000, key: "m" },
  { factor: 1000, key: "k" },
];

export function approximify(value: number) {
  for (let i = 0; i < SCALE_FACTORS.length; i++) {
    const scale = SCALE_FACTORS[i];
    if (value > scale.factor) {
      return "" + Math.round(value / scale.factor) + scale.key;
    }
  }

  return "" + Math.round(value);
}

export const countBarChart = statementStatisticsBarChartFactory(
  "grey",
  countBars,
  approximify,
);
export const retryBarChart = statementStatisticsBarChartFactory(
  "red",
  retryBars,
  approximify,
);
export const rowsBarChart = statementStatisticsBarChartFactory(
  "grey",
  rowsBars,
  approximify,
  rowsStdDev,
  formatTwoPlaces,
);
export const latencyBarChart = statementStatisticsBarChartFactory(
  "grey",
  latencyBars,
  v => Duration(v * 1e9),
  latencyStdDev,
);
