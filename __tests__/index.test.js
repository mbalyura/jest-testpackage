/* eslint-disable no-undef */
import { reverse, makeStack, isEmpty } from '../src';

test('reverse', () => {
  expect(reverse('hello')).toEqual('olleh');
  expect(reverse('')).toEqual('');
});

test('stack main flow', () => {
  const stack = makeStack();
  stack.push('one');
  stack.push('two');
  expect(stack.pop()).toEqual('two');
  expect(stack.pop()).toEqual('one');
});

test('stack isEmpty', () => {
  const stack = makeStack();
  expect(isEmpty(stack)).toBe(true);
  stack.push('two');
  expect(isEmpty(stack)).toBe(false);
  stack.pop();
  expect(isEmpty(stack)).toBe(true);
});

// test('pop in empty stack', () => {
//   const stack = makeStack();
//   // Вызов метода pop обёрнут в функцию, иначе матчер не сможет перехватить исключение
//   expect(() => {stack.pop()}).toThrow();
// });
