/** Add or remove a CSS class to a specified HTML object
    @function classAction
    @param {object} elem HTML element
    @param {string} action Add or Remove
    @param {string} cssClass Arbitrary class name

    @example classAction (myHTMLObject,'add','fooCss')
*/


function classAction (elem,action,cssClass) {
    var classes = elem.classList.value;
        if(action === "add") {
            if(classes.indexOf(cssClass) === -1) {
                var newClass = elem.className + " " + cssClass;
                elem.className = newClass;
            }
        }

        if(action === "remove") {
            if(classes.indexOf(cssClass) !== -1) {
                var pattern = new RegExp('('+cssClass+' ?)+',"ig");
                var newClass = elem.className.replace(pattern,"").trim();
                elem.className = newClass;
            }
        }
}
