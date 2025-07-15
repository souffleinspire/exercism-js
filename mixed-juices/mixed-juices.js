// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  switch(name) {
    case 'Pure Strawberry Joy':
      return 0.5;
      break;
    case 'Energizer':
      return 1.5;
      break;
    case 'Green Garden':
      return 1.5;
      break;
    case 'Tropical Island':
      return 3;
      break;
    case 'All or Nothing':
      return 5;
      break;
    default:
      return 2.5;
  }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let wedges = 0;
  let i = 0;
  while (wedges < wedgesNeeded && i < limes.length) {
    switch (limes[i]) {
      case'small':
        wedges += 6;
        break;
      case'medium':
        wedges += 8;
        break;
      case 'large':
        wedges += 10;
        break;
    }
    i++;
  }
  return i;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  let i = 0;
  while (timeLeft > 0) {
    switch (orders[i]) {
    case 'Pure Strawberry Joy':
      timeLeft -= 0.5;
      break;
    case 'Energizer':
    case 'Green Garden':
      timeLeft -= 1.5;
      break;
    case 'Tropical Island':
      timeLeft -= 3;
      break;
    case 'All or Nothing':
      timeLeft -= 5;
      break;
    default:
      timeLeft -= 2.5;
    }
    i++;
  }
  if (i <= orders.length) {
    return orders.slice(i);
  } else {
    return [];
  }
}
