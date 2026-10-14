import { test } from "node:test";
import assert from "node:assert/strict";
import { highlight } from "./text.mjs";

test("highlight marks the term literally", () => {
  assert.equal(highlight("a.b and axb", "a.b"), "**a.b** and axb");
});
