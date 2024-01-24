import { test } from 'node:test';
import assert from 'node:assert';
import add from './add.js';

test('add() adds two numbers', () => {
    assert.equal(add(1, 2), 3);
});
