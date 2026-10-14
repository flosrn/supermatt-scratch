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

test("readingDay uses the local calendar day", async () => {
  const { execFileSync } = await import("node:child_process");
  for (const [zone, expected] of [["Asia/Shanghai", 15], ["America/Los_Angeles", 14]]) {
    const result = execFileSync(process.execPath, ["--input-type=module", "-e", `
      import { readingDay } from ${JSON.stringify(new URL("./stats.mjs", import.meta.url).href)};
      console.log(readingDay(new Date("2026-10-14T20:00:00Z")));
    `], { env: { ...process.env, TZ: zone }, encoding: "utf8" });
    assert.equal(Number(result.trim()), expected, zone);
  }
});
