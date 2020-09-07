import { Transaction, Filters } from "./";
import { SelectOptions } from "./filter";

export const getAppNames = (transactions: Transaction[]) => {
  return transactions.reduce(
    (acc, current) => {
      const twin = acc.some(
        (item: SelectOptions) => item.label === current.stats_data.app,
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
    [{ label: "All", value: "All" }],
  );
};

export const addTransactionStatements = (
  transactions: any,
  statements: any,
) => {
  const data = transactions.map((item: any) => {
    const transactionStatements = item.stats_data.statement_ids.reduce(
      (acc: string, current: any, idx: number) => {
        const statement = statements.find(
          (stItem: any) => stItem.key.key_data.id === current,
        );
        const newLine = idx > 0 ? "\n" : "";
        return statement
          ? `${acc} ${newLine} ${statement.key.key_data.query}`
          : acc;
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

export const searchTransactionsData = (search: string, transactions: any) => {
  return transactions.filter((transaction: any) =>
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
      transaction.stats_data.app === filters.app || filters.app === "All",
      transaction.stats_data.stats.service_lat.mean >= timeValue || timeValue === "empty",
    ];
    return validateTransaction.every(filter => filter);
  });

  return {
    transactions: filteredTransactions,
    activeFilters,
  };
};
