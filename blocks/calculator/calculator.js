export default async function decorate(block) {
    const calcHTML = '<div class="calculator-content"><h2>Calculate the value of holding</h2><div class="calc-elem"><p>The current share price is</p> <span type="number" id="sharePrice" data-shareval="635.40" class="bold-span">635.40GBP</span></div><div class="calc-elem"><p>Enter the number of shares that you own</p> <input type="number" id="sharesOwned" placeholder=""></div><div class="calc-elem btn-wrapper"><button class="calculateHolding">CALCULATE</button></div><div class="calc-elem"><p>The value of your holding currently stands at</p> <span id="holdingValue" class="bold-span">0GBP</span></div></div>';
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


