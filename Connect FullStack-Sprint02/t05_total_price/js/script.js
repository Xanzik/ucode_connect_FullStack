function total(addCount, addPrice, currentTotal = 0) {
  let newTotal = currentTotal + (addCount * addPrice);
  return +newTotal.toFixed(2);
}
