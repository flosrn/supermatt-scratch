import { test } from "node:test";
import assert from "node:assert/strict";
import { median } from "./Median.mjs";

test("median of an odd-length list is the middle value", () => {
  assert.equal(median([3, 1, 2]), 2);
});

test("median of an even-length list averages the two middle values", () => {
  assert.equal(median([4, 1, 3, 2]), 2.5);
});

test("median leaves its input unsorted", () => {
  const values = [3, 1, 2];
  median(values);
  assert.deepEqual(values, [3, 1, 2]);
});

test("median rejects an empty list", () => {
  assert.throws(() => median([]), RangeError);
});

test("median of two maximum finite values remains finite", () => {
  assert.equal(median([Number.MAX_VALUE, Number.MAX_VALUE]), Number.MAX_VALUE);
});
