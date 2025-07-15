/// <reference path="./global.d.ts" />
//
// @ts-check

/**
 * Determine the price of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export function pizzaPrice(pizza, ...extras) {
  const basePrice = {
  'Margherita': 7,
  'Caprese': 9,
  'Formaggio': 10
  }
/*   let extraPrice = 0;
  for (const extra of extras) {
    if (extra === 'ExtraSauce') {
      extraPrice += 1;
    } else if (extra === 'ExtraToppings') {
      extraPrice += 2;
    }
  }
return basePrice[pizza] + extraPrice;
} */
  if (extras.length === 0) {
    return basePrice[pizza];
  }
  const [first, ...rest] = extras;
  if (first === 'ExtraSauce') {
    return pizzaPrice(pizza, ...rest) + 1;
  } else if (first === 'ExtraToppings') {
    return pizzaPrice(pizza, ...rest) + 2;
  } 
}


/**
 * Calculate the price of the total order, given individual orders
 *
 * (HINT: For this exercise, you can take a look at the supplied "global.d.ts" file
 * for a more info about the type definitions used)
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
  let sum = 0;
  for (const pizzaOrder of pizzaOrders) {
    // console.log(pizzaOrder);
    const pizza = pizzaOrder.pizza;
    const extras = pizzaOrder.extras;
    const price = pizzaPrice(pizza, ...extras);
    // console.log("price: ", price);
    sum += price;
  }
  return sum;
}
