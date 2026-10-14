import { test } from "node:test";
import assert from "node:assert/strict";
import { sum } from "./stats.mjs";

test("sum adds every value", () => {
  assert.equal(sum([1, 2, 3]), 6);
});
