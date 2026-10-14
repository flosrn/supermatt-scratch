import { test } from 'node:test';
import assert from 'node:assert/strict';
import { containsLiteral } from './stats.mjs';
test('containsLiteral matches literal metacharacters', () => {
  assert.equal(containsLiteral('a+b', 'a+b'), true);
  assert.equal(containsLiteral('ab', 'a+b'), false);
});
test('containsLiteral empty literal matches any string', () => {
  assert.equal(containsLiteral('', ''), true);
  assert.equal(containsLiteral('💡 quotes " and newline\n', ''), true);
});
