/* eslint-disable no-undef */
import Cart from '../src/cart';

describe('empty add', () => {
  let cart;
  beforeEach(() => {
    cart = new Cart();
  });
  test('should be empty', () => {
    expect(cart.getItems()).toHaveLength(0);
    expect(cart.getCost()).toBe(0);
    expect(cart.getCount()).toBe(0);
  });
  test('add to empty', () => {
    cart.addItem({ name: 'banana', price: 3 }, 10);
    expect(cart.getItems()).toEqual([{ good: { name: 'banana', price: 3 }, count: 10 }]);
    expect(cart.getCost()).toBe(30);
    expect(cart.getCount()).toBe(10);
  });
});

describe('not empty add', () => {
  let cart;
  beforeEach(() => {
    cart = new Cart();
    cart.addItem({ name: 'banana', price: 3 }, 10);
    cart.addItem({ name: 'apple', price: 5 }, 5);
  });
  test('should be not empty', () => {
    expect(cart.getItems()).toHaveLength(2);
    expect(cart.getCost()).toBe(55);
    expect(cart.getCount()).toBe(15);
  });
  test('add to not empty', () => {
    cart.addItem({ name: 'watermeloon', price: 2 }, 5);
    expect(cart.getItems()).toHaveLength(3);
    expect(cart.getCost()).toBe(65);
    expect(cart.getCount()).toBe(20);
  });
});
