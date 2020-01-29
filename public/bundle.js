(function () {
    'use strict';

    let counter = document.getElementById('counterSpan');

    const incrementCounter = () => {
        let currentCounterString = counter.textContent;
        if (isNaN(currentCounterString)) {
            counter.textContent = 0;
            return;
        }
        let currentValue = Number(currentCounterString);
        counter.textContent = currentValue + 1;
    };

    document.getElementById('incrementButton').onclick = () => {
        incrementCounter();
    };

}());
