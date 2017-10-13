var assert = require('assert');

var src = require('../build/main.js');

describe('stub', () => {
    it('should return 42', () => {
        assert.equal(42, src.stub());
    });
});

