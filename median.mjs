// Returns the median of a list of numbers without changing the list.
export function median(values) {
  if (values.length === 0) throw new RangeError("median requires at least one number");
  const sorted = [...values].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  if (sorted.length % 2) return sorted[mid];
  const lower = sorted[mid - 1];
  const upper = sorted[mid];
  const sum = lower + upper;
  return Number.isFinite(sum) ? sum / 2 : lower / 2 + upper / 2;
}
