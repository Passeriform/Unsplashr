export const minimizeWithSuffix = (num: number, digits?: number ) => {
  const _digits = digits ?? 2;

  type LookupType = { limit: number, symbol: string};

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
    .find(
      (minimizer: LookupType) => num >= minimizer.limit
    );

  return minimizer
    ? (num / minimizer.limit)
      .toFixed(_digits)
      .replace(pattern, "$1") + minimizer.symbol
    : "0";
}

export const pickBy = <K extends string | number | symbol, V>(object: Record<K, V>, predicate = (e: V) => !!e) => {
    const result: Record<K, V> = {} as Record<K, V>;

    for (const key in object) {
        if (object.hasOwnProperty(key) && predicate(object[key])) {
            result[key] = object[key];
        }
    }

    return result;
};
