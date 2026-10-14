export function sum(values) {
  let total = 0;
  for (const v of values) total += v;
  return total;
}

export function average(values) {
  return sum(values) / values.length;
}

// How many times `word` appears in `text`, matched literally.
export function countWord(text, word) {
  return (text.match(new RegExp(RegExp.escape(word), "g")) ?? []).length;
}
