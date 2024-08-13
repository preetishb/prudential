export default async function decorate(block) {
    const calcHTML = '<div class="calculator-container"><h1>Calculate the value of holding</h1><p>The current share price is <input type="number" id="sharePrice" placeholder="635.40GBP"></p><p>Enter the number of shares that you own <input type="number" id="sharesOwned" placeholder=""></p><button onclick="calculateHolding()">CALCULATE</button><p>The value of your holding currently stands at <span id="holdingValue">0GBP</span></p></div>';
    block.innerHTML = calcHTML;
}


function calculateHolding() {
    const stockPrice = parseFloat(document.getElementById("sharePrice").value);
    const sharesOwned = parseFloat(document.getElementById("sharesOwned").value);
    const holdingValue = stockPrice * sharesOwned;

    document.getElementById("holdingValue").textContent = `${holdingValue.toFixed(2)}GBP`;
}