import { test } from 'node:test';
import assert from 'node:assert/strict';
import { containsLiteral } from './stats.mjs';
test('containsLiteral matches literal metacharacters', () => {
  assert.equal(containsLiteral('a+b', 'a+b'), true);
  assert.equal(containsLiteral('ab', 'a+b'), false);
});
