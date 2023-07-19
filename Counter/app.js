let countValue = document.getElementById('countValue');

let decBtn = document.getElementById('decBtn');
let resBtn = document.getElementById('resBtn');
let incBtn = document.getElementById('incBtn');

let count = parseInt(countValue.innerHTML);

decBtn.addEventListener("click", () => {
    count--;
    countValue.innerHTML = count;
})

resBtn.addEventListener('click', () => {
    count = 0;
    countValue.innerHTML = count;
})

incBtn.addEventListener('click', () => {
    count++;
    countValue.innerHTML = count;
})