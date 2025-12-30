const btnEl = document.getElementById('calculate')
const billInput = document.getElementById('bill')
const tipInput = document.getElementById('tip')
const totalSpan = document.getElementById('total')


function calculateTota(){
    const billValu = billInput.value;
    const tipValue = tipInput.value;
    const totalValue = billValu * (1+ tipValue / 100);

    totalSpan.innerHTML = totalValue.toFixed(2)
}

btnEl.addEventListener('click', calculateTota)