export default async function decorate(block) {
    const calcHTML = '<div class="calculator-container"><h1>Calculate the value of holding</h1><p>The current share price is <span type="number" id="sharePrice" data-shareval="635.40" class="bold-span">635.40GBP</span></p><p>Enter the number of shares that you own <input type="number" id="sharesOwned" placeholder=""></p><button class="calculateHolding">CALCULATE</button><p>The value of your holding currently stands at <span id="holdingValue" class="bold-span">0GBP</span></p></div>';
    block.innerHTML = calcHTML;

    const calc = block.querySelector('.calculateHolding');

    function calculateHolding() {
        const stockPrice = parseFloat(document.getElementById("sharePrice").getAttribute('data-shareval'));
        const sharesOwned = parseFloat(document.getElementById("sharesOwned").value);
        const holdingValue = stockPrice * sharesOwned;

        document.getElementById("holdingValue").textContent = `${holdingValue.toFixed(2)}GBP`;
    }

    calc.addEventListener(
        'click',
        () => {
            calculateHolding();
        },
        { passive: true },
    );

}


