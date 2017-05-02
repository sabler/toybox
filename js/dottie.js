/** Take a string and truncate it to an arbitrary amount and add...
  * HTML tags are automatically stripped for a more accurate response.
  * Truncation doesn't permit partial words
    @function dottie
    @param {string} str An arbitrary string
    @param {number} limit Character limit (the calcuation is a little conservative)

    @example swapper('Lorem Ipsum Dolor Sit Amet',7);
    @returns {string} Lorem...
*/

function dottie (str, limit) {
        var targetStr = str;
        var targetLimit = limit;
        var lastSpace = 0;
        var blank = "";
        var modifiedStr = "";
        var sanitizedString = "";
        var truncatedStr = "";

            if(str !== "undefined" && typeof str !== "undefined") {

                sanitizedString = targetStr.replace(/(<([^>]+)>)/ig,"");
                truncatedStr = sanitizedString.substring(0,targetLimit+1);
                lastSpace = truncatedStr.lastIndexOf(" ");
                modifiedStr = (sanitizedString.length <= limit) ? sanitizedString : truncatedStr.substring(0,lastSpace) + "...";
                return modifiedStr;

            } else {
                return blank;
            }
};
