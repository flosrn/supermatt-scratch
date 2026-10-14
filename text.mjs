// Wraps every literal occurrence of `term` in `text` with ** for the report.
export function highlight(text, term) {
  return text.replaceAll(term, (match) => `**${match}**`);
}
