const prices = document.getElementsByClassName('price');
const toggleBtn = document.getElementsByClassName('menu-toggle-button')[0];

toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('active');
    changePrices(toggleBtn);
});

function changePrices(x) {
    if(x.classList.contains('active')) {
        for(let i = 0; i < prices.length; i++) {
            let num = Number(prices[i].innerText);
            num -= 0.09; num /= 10;
            prices[i].innerText = num.toFixed(2);
        }
    } else {
        for(let i = 0; i < prices.length; i++) {
            let num = Number(prices[i].innerText);
            num *= 10; num += 0.09;
            prices[i].innerText = num.toFixed(2);
        }
    }
}