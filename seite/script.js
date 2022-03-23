function rotate (container, name, amount) {
    var element = container.querySelector('.' + name);
    var transform = 'rotate(' + (amount * 360) + 'deg)';
    element.style.transform = transform;
}
function makeClock (element, _timezoneOffset, _time) {
    var timezoneOffset = _timezoneOffset || 0;
    var time = _time || Date.now();
    var minutes = (time / 1000 / 60) - timezoneOffset;

    rotate(element, 'hour-hand', (minutes / 60 / 12) % 12);
    rotate(element, 'minute-hand', (minutes / 60) % 60);
    rotate(element, 'second-hand', (minutes) % 60);
}
document.addEventListener('DOMContentLoaded', function () {
    var element = document.querySelector('.clock-face');
    if (element) {
        var timezoneOffset = new Date().getTimezoneOffset();
        makeClock(element, timezoneOffset);
    }
});