
function k_invert(a,k) {

    if (!a || !k || arguments.length!==2) return 'error'
    if (a.some((n)=> {return n<=0} )  || !a.every(Number.isInteger) || !(k<=a.length && k>0) ) return 'error'
    return a.slice(-k).concat(a.slice(0,a.length-k))

}

//
// console.log('[1,2]',k_invert([1,2,3,4,5],1))
//
// console.log("[1,'a']",k_invert([1,'a'],3))

module.exports = k_invert