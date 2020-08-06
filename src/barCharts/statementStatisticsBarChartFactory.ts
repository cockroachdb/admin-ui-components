import * as protos from "src/js/protos";
import {
  barChartFactory,
  BarChartOptions,
} from "src/barCharts/barChartFactory";

type StatementStatistics = protos.cockroach.server.serverpb.StatementsResponse.ICollectedStatementStatistics;

export const statementStatisticsBarChartFactory = (
  type: "grey" | "red",
  accessors: { name: string; value: (d: StatementStatistics) => number }[],
  formatter: (d: number) => string = x => `${x}`,
  stdDevAccessor?: { name: string; value: (d: StatementStatistics) => number },
  legendFormatter?: (d: number) => string,
) => (rows: StatementStatistics[] = [], options: BarChartOptions = {}) => (
  d: StatementStatistics,
) => {
  const destructedAccessors = accessors.map(item => ({
    name,
    value: item.value(d),
  }));
  const destructedStdDevAccessor = stdDevAccessor
    ? { name: stdDevAccessor?.name, value: stdDevAccessor?.value(d) }
    : undefined;

  return barChartFactory(
    type,
    destructedAccessors,
    formatter,
    destructedStdDevAccessor,
    legendFormatter,
  )(rows.length, options)();
};
