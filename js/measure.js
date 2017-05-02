/** Get the measurement in pixels of an arbitrary HTML element
  * returned in a nice, friendly object
    @function measure
    @param {string|object} element An element's ID or DOM previously-retrieved DOM object
    @example measure('#someID')
    @example measure (HTMLObject)

    @returns {object} metadata
*/

function measure(element) {
    var targetElem = (typeof element === "string" && element.indexOf('#') !== -1) ? document.getElementById(element.substring(1,element.length)) : element;

    return metadata = {
        "_elemType": targetElem.tagName.toLowerCase(),
        forMath: {
            "offset_w":targetElem.offsetWidth,
            "client_w":targetElem.clientHeight,
            "offset_h":targetElem.offsetHeight,
            "client_h":targetElem.clientHeight
        },
        forCSS: {
            "offset_w":targetElem.offsetWidth+'px',
            "client_w":targetElem.clientHeight+'px',
            "offset_h":targetElem.offsetHeight+'px',
            "client_h":targetElem.clientHeight+'px'
        }
    };
}
