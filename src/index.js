// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
  const coins = {};
  const nominal = {
    H: 50,
    Q: 25,
    D: 10,
    N: 5,
    P: 1
  };

  if (currency >= 10000)
    coins = {
      error: "You are rich, my friend! We don't have so much coins for exchange"
    };
  else if (currency > 0) {
    for (key in nominal) {
      if (Math.floor(currency / nominal[key]) > 0) {
        coins[key] = Math.floor(currency / nominal[key]);
        currency -= nominal[key] * coins[key];
      }
    }
  }

  return coins;
};
