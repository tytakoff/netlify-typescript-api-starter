import { derivative } from './derivative'

test('empty', () => {
  expect(derivative('')).toBe('0')
})

test('simple expression', () => {
  expect(derivative('x^2 + x')).toBe('2*x+1')
})

test('invalid expression', () => {
  expect(() => derivative('x^2 + - *')).toThrow()
})
