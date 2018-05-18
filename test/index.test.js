const tools = require('../dist/index.min');

test(`tools.fillZero(9, 2) // '09'`, () => {
    expect(tools.fillZero(9, 2)).toBe('09');
});

test(`tools.fillZero(9, 3) // '009'`, () => {
    expect(tools.fillZero(9, 3)).toBe('009');
});

test(`tools.typeOf(123); // 'number'`, () => {
    expect(tools.typeOf(123)).toBe('number');
});

test(`tools.keepDecimal(1000, 3); // '1,000.000'`, () => {
    expect(tools.keepDecimal(1000, 3, true)).toBe('1,000.000');
});

test(`tools.keepDecimal(1000, 3, false); // '1000.000'`, () => {
    expect(tools.keepDecimal(1000, 3, false)).toBe('1000.000');
});

test(`tools.extend({a: 1, c: [1, 2]}, {b: 2, c: [3]}); // { a: 1, b: 2, c: [3, 2] }`, () => {
    expect(tools.extend({a: 1, c: [1, 2]}, {b: 2, c: [3]})).toEqual({a: 1, b: 2, c: [3, 2]});
});
