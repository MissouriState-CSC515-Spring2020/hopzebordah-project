let counter = document.getElementById('counterSpan');

export const incrementCounter = () => {
    let currentCounterString = counter.textContent;
    if (isNaN(currentCounterString)) {
        counter.textContent = 0;
        return;
    }
    let currentValue = Number(currentCounterString);
    counter.textContent = currentValue + 1;
};