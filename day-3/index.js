// function getHypothenus(opp, adj) {
//   let hyp = Math.sqrt(opp ** 2 + adj ** 2);
//   return hyp;
// }

// console.log(getHypothenus(2, 4));
// console.log(getHypothenus(4, 3));

// const getShippingCost = function (numberOfItems) {

// }
const getShippingCost = (numberOfItems) => {
  let cost;
  if (numberOfItems === 1) {
    cost = 10.99;
  } else {
    cost = 10.99 + (numberOfItems - 1) * 2.99;
  }
  return cost;
};

console.log(getShippingCost(3));
