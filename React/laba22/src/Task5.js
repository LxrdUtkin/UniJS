import React, { useState } from "react";

function CurrencyCalculator() {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("UAH");
  const [result, setResult] = useState(0);

  function handleAmountChange(event) {
    setAmount(Number(event.target.value));
  }

  function handleFromCurrencyChange(event) {
    setFromCurrency(event.target.value);
  }

  function handleToCurrencyChange(event) {
    setToCurrency(event.target.value);
  }

  function handleCalculate() {
    if (fromCurrency === "USD" && toCurrency === "UAH") {
      setResult(amount * 36.5686);
    } else if (fromCurrency === "UAH" && toCurrency === "USD") {
      setResult(amount / 36.5686);
    } else {
      setResult(amount);
    }
  }

  return (
    <div>
      <label>
        Значення:
        <input type="number" value={amount} onChange={handleAmountChange} />
      </label>
      <br />
      <label>
        З:
        <br />
        <select value={fromCurrency} onChange={handleFromCurrencyChange}>
          <option value="USD">USD</option>
          <option value="UAH">UAH</option>
        </select>
      </label>
      <br />
      <label>
        До:
        <br />
        <select value={toCurrency} onChange={handleToCurrencyChange}>
          <option value="USD">USD</option>
          <option value="UAH">UAH</option>
        </select>
      </label>
      <br /><br />
      <button onClick={handleCalculate}>Перевести</button>
      <p>{result}</p>
    </div>
  );
}

export default CurrencyCalculator;
