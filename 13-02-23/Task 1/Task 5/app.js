let extractCurrencyValue = (str) => {
    let numberArr = [];
    for (let char of str) {
    if (!isNaN(char)) {
    numberArr.push(char);
    }
    }
    alert (Number(numberArr.join('')));
    }