/** How far down the page are you percentage wise?
    @function scrollTrack
    @example window.addEventListener('scroll', function(e) {
        var userPos = getScrollPosition();
        ...
    @returns {object} Scroll direction and percentage (rounded)
*/

function scrollTrack() {
    var _innerHeight = window.innerHeight;
    var _yOffset = window.pageYOffset;
    var _dir = _yOffset > lastPos ? "down" : "up";
    window.lastPos = _yOffset; // window scope for demonstration purposes only, move it where you need it

    var _yTotal = document.body.scrollTop + _innerHeight;
    var _posPercent = Math.floor((_yOffset / (document.body.scrollHeight - _innerHeight)) * 100);

    return {"dir":_dir,"percent":_posPercent};
}
