/** Replace one string in the DOM with another
    @function swapper
    @param {object} pattern Regex pattern of the string you'd like to target
    @param {string} replText The text you'd like to use instead

    @example swapper(/New York City/ig,"San Francisco");
*/

function swapper(pattern,replText) {
    var pageElements = document.querySelectorAll('span,p,h1,h2,h3,h4,h5,h6,li,blockquote');
    var parsedTxt = "";
    var regex = pattern;
    var doesStringMatch = null;
    pageElements.forEach(function(elem,idx) {
        if(elem.nodeType === 1 && elem.textContent.indexOf('script') === -1 && elem.textContent.indexOf('style') === -1) {
            doesStringMatch = regex.test(elem.textContent);
            parsedTxt = elem.textContent.replace(regex,replText);
            elem.textContent = parsedTxt;
        }
    });
}
