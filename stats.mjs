export function sum(values) {
  let total = 0;
  for (const v of values) total += v;
  return total;
}

export function average(values) {
  if (values.length === 0) return 0;
  return sum(values) / values.length;
}

// How many times `word` appears in `text`, matched literally.
export function countWord(text, word) {
  const escaped = word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return (text.match(new RegExp(escaped, "g")) ?? []).length;
}
