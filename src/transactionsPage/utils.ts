import { Transaction, Filters } from "./";
import { SelectOptions } from "./filter";
import { StatementStatistics } from "src/util/appStats";
import { AggregateStatistics } from "../statementsTable";

export const getAppNames = (
  transactions: Transaction[],
  prefix: string,
): SelectOptions[] => {
  return transactions.reduce(
    (acc: SelectOptions[], current: Transaction) => {
      const twin = acc.some(
        (o: SelectOptions) =>
          o.label === current.stats_data.app ||
          current.stats_data.app.split("-").includes(prefix),
      );
      return twin
        ? acc
        : acc.concat([
            {
              label: current.stats_data.app,
              value: current.stats_data.app,
            },
          ]);
    },
    [
      { label: "All", value: "All" },
      { label: prefix, value: prefix },
    ],
  );
};

export const addTransactionStatements = (
  transactions: Transaction[],
  statements: StatementStatistics[],
) => {
  const data = transactions.map((item: Transaction) => {
    const transactionStatements = item.stats_data.statement_ids.reduce(
      (acc: string, current: string) => {
        const statement = statements.find(
          // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
          // @ts-ignore
          (stItem: StatementStatistics) => stItem.id === current,
        );
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        return statement ? `${acc} ${statement.key.key_data.query}` : acc;
      },
      "",
    );
    return {
      transactionStatements,
      ...item,
    };
  });
  return data;
};

export const collectStatementsText = (statements: AggregateStatistics[]) => {
  return statements.reduce(
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    (acc: string, current: StatementStatistics, idx: number) => {
      const newLine = idx > 0 ? "\n" : "";
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      return `${acc} ${newLine} ${current.key.key_data.query}`;
    },
    "",
  );
};

export const getStatementsById = (
  statementsIds: string[],
  statements: StatementStatistics[],
) => {
  return statementsIds.map((id: string) => {
    const statement = statements.find(
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      (statement: StatementStatistics) => statement.id === id,
    );
    return {
      ...statement,
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      label: statement.key.key_data.query,
    };
  });
};

export const searchTransactionsData = (
  search: string,
  transactions: Transaction[],
) => {
  return transactions.filter((transaction: Transaction) =>
    search
      .split(" ")
      .every(val =>
        transaction.transactionStatements
          .toLowerCase()
          .includes(val.toLowerCase()),
      ),
  );
};

function getTimeValue(timeNumber: string, timeUnit: string) {
  if (arguments.length < 2 || timeNumber === "0") return "empty";
  return timeUnit === "seconds"
    ? Number(timeNumber)
    : Number(timeNumber) / 1000;
}

export const filterTransactions = (data: Transaction[], filters: Filters) => {
  if (!filters)
    return {
      transactions: data,
      activeFilters: 0,
    };
  const { timeNumber, timeUnit } = filters;
  const timeValue = getTimeValue(timeNumber, timeUnit);
  const filtersStatus = [
    timeValue && timeValue !== "empty",
    filters.app !== "All",
  ];
  const activeFilters = filtersStatus.filter(filter => filter).length;

  const filteredTransactions = data.filter((transaction: Transaction) => {
    const validateTransaction = [
      transaction.stats_data.app.includes(filters.app) || filters.app === "All",
      transaction.stats_data.stats.service_lat.mean >= timeValue ||
        timeValue === "empty",
    ];
    return validateTransaction.every(filter => filter);
  });

  return {
    transactions: filteredTransactions,
    activeFilters,
  };
};
