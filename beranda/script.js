
let valueDisplay = document.querySelectorAll(".num");
let interval = 5000;

valueDisplay.forEach((displayValue) => {
    let startValue = 0;
    let endValue = parseInt(displayValue.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function () {
        startValue += 1;
        displayValue.textContent = startValue + "+";
        if (startValue == endValue) {
            clearInterval(counter);
        }
    }, duration);
});

