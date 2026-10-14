export function sum(values) {
  let total = 0;
  for (const v of values) total += v;
  return total;
}

// True when the literal text occurs in the input; an empty literal always matches.
export function containsLiteral(text, literal) {
  return new RegExp(RegExp.escape(literal)).test(text);
}
