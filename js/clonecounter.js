/** Find the most common entry in an array of numbers
    @function clonecounter
    @param {array} arr Simple array of numbers
    @example clonecounter(arrayName)

    @returns {number} Most common entry
*/

function clonecounter(arr) {
    var mostCommon = 0;
    var count = 0;
    var compObj = {};
        arr.forEach(function(val,idx) {
            if(!compObj[val]) {
                compObj[val] = 1;
            } else {
                compObj[val]+=1;
            };
        });

        Object.keys(compObj).forEach(function(val,idx) {
            if(obj[val] > count) {
                count = compObj[val];
                mostCommon = val;
            }
     });

     return Number(mostCommon);
}
