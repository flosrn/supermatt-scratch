// Returns the median of a list of numbers without changing the list.
export function median(values) {
  if (values.length === 0) throw new RangeError("median requires at least one number");
  const sorted = [...values].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
}
