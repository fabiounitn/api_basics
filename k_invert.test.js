const k_invert = require('./k_invert')



// k not a number, k>len, k<0

var a = [1,2,3]

test('error on k not a number', () => {
    k='hello'
    expect(k_invert(a,k)).toEqual('error');
});

// a not an array, empty array, some element not a positive integer


