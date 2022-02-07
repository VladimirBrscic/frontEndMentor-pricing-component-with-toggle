const price = document.querySelectorAll('.price');
const toggle = document.querySelector('fieldset');

const getMonthlyPrices = ()=>{
    fetch('prices.json')
    .then((res) => res.json())
    .then(data => {
        const prices = data;
        let i = 0;
        price.forEach(item => {
            item.innerHTML = prices.prices.monthly[i];
            i++;
        })
    })
}
const getAnnuallyPrices = ()=>{
    fetch('prices.json')
    .then((res) => res.json())
    .then(data => {
        const prices = data;
        let i = 0;
        price.forEach(item => {
            item.innerHTML = prices.prices.annually[i];
            i++;
        })
    })
}

getMonthlyPrices();

toggle.addEventListener('click', (e)=>{
    if(e.target.innerHTML === 'Monthly'){
        getMonthlyPrices();
    }
    else if(e.target.innerHTML === 'Annually'){
        getAnnuallyPrices();
    }
});
