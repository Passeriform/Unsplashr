export const minimizeWithSuffix = (num: number, _digits?: number) => {
  const digits = _digits ?? 2;

  type LookupType = { limit: number; symbol: string };

  const minimizerDict: LookupType[] = [
    { limit: 1, symbol: "" },
    { limit: 1e3, symbol: "K" },
    { limit: 1e6, symbol: "M" },
    { limit: 1e9, symbol: "B" },
    { limit: 1e12, symbol: "T" },
    { limit: 1e15, symbol: "Q" },
    { limit: 1e18, symbol: "P" },
  ];

  const pattern: RegExp = /\.0+$|(\.[0-9]*[1-9])0+$/;

  const minimizer = minimizerDict
    .slice()
    .reverse()
    .find((entry: LookupType) => num >= entry.limit);

  return minimizer
    ? (num / minimizer.limit).toFixed(digits).replace(pattern, "$1") +
        minimizer.symbol
    : "0";
};

export const pickBy = <K extends string | number | symbol, V>(
  object: Record<K, V>,
  predicate = (e: V) => !!e
) => {
  const result: Record<K, V> = {} as Record<K, V>;

  Object.keys(object).forEach((key: string) => {
    if (predicate(object[key as K])) {
      result[key as K] = object[key as K];
    }
  });

  return result;
};
