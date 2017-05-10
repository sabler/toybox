/** Return the value of a key that exists in the URL parameter string
    @function paramPeek
    @param {string} element A key of a key/value pair from the URL
    @example paramPeek('key')

    @returns {string} Value of passed key
*/

function paramPeek(requestedParam) {
    var locParams = location.href;
    var scriptParams = locParams.split('?');
    var discreteParams = scriptParams[1].split('&');
        for(var q=0; q<discreteParams.length; q++) {
            var parsedParam = [];
            if(discreteParams[q].match(requestedParam)) {
                parsedParam = discreteParams[q].split('=');
                break;
            }
        }
        return ( parsedParam.length > 0 ) ? parsedParam[1] : false;
    }
