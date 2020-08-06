import React from "react";
import _ from "lodash";
import d3 from "d3";
import { Tooltip } from "src/index";
import { numericStatLegend } from "src/barCharts/numericStaticLegend";
import { cx } from "src/barCharts/barCharts";

export interface BarChartOptions {
  classes?: {
    root?: string;
    label?: string;
  };
}

export const barChartFactory = (
  color: string,
  accessors: { name: string; value: number }[],
  formatter: (d: number) => string = x => `${x}`,
  stdDevAccessor?: { name: string; value: number },
  legendFormatter?: (d: number) => string,
) => (rows?: number, options?: BarChartOptions) => {
  const getTotal = () => _.sum(_.map(accessors, ({ value }) => value));
  const getTotalWithStdDev = () => getTotal() + stdDevAccessor.value;

  const extent = d3.extent(
    [rows],
    stdDevAccessor ? getTotalWithStdDev : getTotal,
  );

  const scale = d3.scale
    .linear()
    .domain([0, extent[1]])
    .range([0, 100]);

  return () => {
    if (rows === 0) {
      scale.domain([0, getTotal()]);
    }

    let sum = 0;
    _.map(accessors, ({ name, value }) => {
      sum += value;
      return (
        <div
          key={name + value}
          className={cx(name, "bar-chart__bar")}
          style={{ width: scale(value) + "%" }}
        />
      );
    });

    const renderStdDev = () => {
      if (!stdDevAccessor) {
        return null;
      }

      const { name, value } = stdDevAccessor;

      const stddev = value;
      const width = stddev + (stddev > sum ? sum : stddev);
      const left = stddev > sum ? 0 : sum - stddev;
      const cn = cx(name, "bar-chart__bar", "bar-chart__bar--dev");
      const style = {
        width: scale(width) + "%",
        left: scale(left) + "%",
      };
      return <div className={cn} style={style} />;
    };

    const className = cx("bar-chart", `bar-chart-${color}`, {
      "bar-chart--singleton": length === 0,
      [options?.classes?.root]: !!options?.classes?.root,
    });
    if (stdDevAccessor) {
      const sd = stdDevAccessor.value;
      const titleText = numericStatLegend(
        rows,
        sum,
        sd,
        legendFormatter || formatter,
      );
      return (
        <div className={className}>
          <Tooltip text={titleText} short>
            <div className={cx("bar-chart__label", options?.classes?.label)}>
              {formatter(getTotal())}
            </div>
            <div className={cx("bar-chart__multiplebars")}>
              <div
                key="bar-chart__parse"
                className={cx("bar-chart__parse", "bar-chart__bar")}
                style={{ width: scale(getTotal()) + "%" }}
              />
              {renderStdDev()}
            </div>
          </Tooltip>
        </div>
      );
    } else {
      return (
        <div className={className}>
          <div className={cx("bar-chart__label", options?.classes?.label)}>
            {formatter(getTotal())}
          </div>
          <div
            key="bar-chart__parse"
            className={cx("bar-chart__parse", "bar-chart__bar")}
            style={{ width: scale(getTotal()) + "%" }}
          />
        </div>
      );
    }
  };
};
