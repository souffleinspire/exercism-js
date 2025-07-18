/// <reference path="./global.d.ts" />
//
// @ts-check
//
// The lines above enable type checking for this file. Various IDEs interpret
// the @ts-check and reference directives. Together, they give you helpful
// autocompletion when implementing this exercise. You don't need to understand
// them in order to use it.
//
// In your own projects, files, and code, you can play with @ts-check as well.

import { notify } from './notifier';
import { order } from './grocer';

/**
 * @return void
 */
export function onSuccess() {
  return notify({message: 'SUCCESS'});
  //直接调用 notify 函数，并传入对象 { message: 'SUCCESS' } 
  // implement the onSuccess callback to call notify with a success message
}


/**
 * @return void
 */
export function onError() {
  return notify({ message: 'ERROR' });
  // implement the onError callback to call notify with an error message
}

/**
 * @param {GrocerQuery} query
 * @param {FruitPickerSuccessCallback} onSuccessCallback
 * @param {FruitPickerErrorCallback} onErrorCallback
 * @return void
 */
export function orderFromGrocer(query, onSuccessCallback, onErrorCallback) {
  return order(query, onSuccessCallback, onErrorCallback);
}

/**
 * @param {string} variety
 * @param {number} quantity
 * @return void
 */

export function postOrder(variety, quantity) {
    const query = {
        variety: variety,
        quantity: quantity
    };
    orderFromGrocer(query, onSuccess, onError);
    return `order placed for ${quantity} ${variety}`;
}
