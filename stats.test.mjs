import { test } from "node:test";
import assert from "node:assert/strict";
import { sum } from "./stats.mjs";

test("sum adds every value", () => {
  assert.equal(sum([1, 2, 3]), 6);
});

test("average divides the sum by the count", async () => {
  const { average } = await import("./stats.mjs");
  assert.equal(average([2, 4, 6]), 4);
});

test("average returns zero for an empty list", async () => {
  const { average } = await import("./stats.mjs");
  assert.equal(average([]), 0);
});

test("countWord matches the word literally", async () => {
  const { countWord } = await import("./stats.mjs");
  assert.equal(countWord("a+b, a+b and ab", "a+b"), 2);
  assert.equal(countWord("[a]. [a]. a", "[a]."), 2);
  assert.equal(countWord("a\\b a\\b", "a\\b"), 2);
});
