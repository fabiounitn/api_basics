const k_invert = require('./k_invert')



// k not a number, k>len, k<0

var a = [1,2,3]

test('error on k not a number', () => {
    k='hello'
    expect(k_invert(a,k)).toEqual('error');
});

test('error on k negative', () => {
    k=-1
    expect(k_invert(a,k)).toEqual('error');
});

test('error on k real number', () => {
    k=3.5
    expect(k_invert(a,k)).toEqual('error');
});

test('error on k greater than length', () => {
    k=18
    expect(k_invert(a,k)).toEqual('error');
});


test('error on empty array', () => {
    k=18
    a=[]
    expect(k_invert(a,k)).toEqual('error');
});

test('error on k =0', () => {
    k=0
    a=[1]
    expect(k_invert(a,k)).toEqual('error');
});

test('error on a null', () => {
    k=0
    a=null
    expect(k_invert(a,k)).toEqual('error');
});

test('error on k null', () => {
    k=null
    a=[1,2,3]
    expect(k_invert(a,k)).toEqual('error');
});

test('error on one param', () => {

    expect(k_invert([1,2])).toEqual('error');
});

test('error on three param', () => {

    expect(k_invert([1,2],1,4)).toEqual('error');
});

// VALID TESTS

test('ok on k=1', () => {
    k=1
    a=[1,2,3]
    expect(k_invert(a,k)).toEqual([3,1,2]);
});

test('ok on k=a.len', () => {

    a=[1,2,3]
    k=a.length
    expect(k_invert(a,k)).toEqual(a);
});

test('ok a of one element, k=1', () => {
    a=[1]
    k=1
    expect(k_invert(a,k)).toEqual(a);
});







// a not an array, empty array, some element not a positive integer


