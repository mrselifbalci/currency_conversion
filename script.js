
// The British Company is breaking out into a new markets and need to convert prices to foreign currencies.
// Convert British Sterling to USD
const convertToUSD = (sterling) => {
  let usd = sterling * 1.4;
  return usd;
};
console.log(convertToUSD(13));

// Convert British Sterling to Brasil BRL. The bank takes 1% fee from this transaction.

const convertToBRL = (sterling) => {
  let brl = sterling * 0.99 * 5.7;
  return brl;
};
console.log(convertToBRL(13));

// Combine the two functions above and do the same thing in one function below.

const currencyConvertor = (fromSterlingTo, value) => {
  if (fromSterlingTo === "usd") {
    let usdValue = value * 1.4;
    return usdValue;
  } else if (fromSterlingTo === "brl") {
    let brlValue = value * 0.99 * 5.7;
    return brlValue;
  }
};
console.log(currencyConvertor("usd", 13));
console.log(currencyConvertor("brl", 13));
