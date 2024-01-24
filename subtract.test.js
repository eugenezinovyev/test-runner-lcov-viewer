import { test } from 'node:test';
import assert from 'node:assert';
import subtract from './subtract.js';

test('subtract() subtracts two numbers', () => {
    assert.equal(subtract(5, 2), 3);
});
