/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    const arr2=[];
    let index=0
    for(let element of arr)
    {
        arr2[index] =fn(element,index);
        index++;
    }
    return arr2;

    
};
