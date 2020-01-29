import { incrementCounter } from './modules/increment-counter.js';

document.getElementById('incrementButton').onclick = () => {
    incrementCounter();
};