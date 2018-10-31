
const conc = require('./someModule').conc


test('concat test', () => {
    expect(conc('a','b')).toBe('ab');
});

test('concat null', () => {
    expect(conc(null,null)).toBe(null);
});

