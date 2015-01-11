'use strict';

jest.dontMock('Vector');

var Vector = require('Vector');

describe('Vector', () => {
  it('should test something', () => {
    var x = new Vector('a', 'b');
    expect(x.u).toBe('a');
    expect(x.v).toBe('b');
  });
});
