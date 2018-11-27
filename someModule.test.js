
const concatenateStrings = require('./someModule').concatenateStrings

// const c = require('./someModule')
//
// c.concatenateStrings()

test('concat test', () => {
    expect(concatenateStrings('a','b')).toBe('ab');
});

test('concat null', () => {
    expect(concatenateStrings(null,null)).toBe(0);
});

