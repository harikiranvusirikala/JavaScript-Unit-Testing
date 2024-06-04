import { describe, test, it, expect } from "vitest";
import { fizzBuzz, max } from "../src/intro";

describe('max', () => {
  it('shoule return the first argument if it is greater', () => {
    // AAA
    // Arrange - Setup our test environment including any necessary data or configuration
    // const a = 2;
    // const b = 1;

    // Act - Perform the action we want to test
    // const result = max(a, b);

    // Assert - Check the outcome to ensure that it matches our expectations
    // expect(result).toBe(2);

    expect(max(2, 1)).toBe(2);
  });

  it('shoule return the second argument if it is greater', () => {
    expect(max(1, 2)).toBe(2);
  });

  it('shoule return the first argument if arguments are equal', () => {
    expect(max(2, 2)).toBe(2);
  });
})

describe('fizzBuzz', () => {
  it('should return FizzBuzz if arg is divisible by 3 and 5', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz')
  });

  it('should return Fizz if arg is only divisible by 3', () => {
    expect(fizzBuzz(3)).toBe('Fizz')
  });

  it('should return Buzz if arg is only divisible  by 5', () => {
    expect(fizzBuzz(5)).toBe('Buzz')
  });

  it('should return arg as string if it is not divisible by 3 or 5', () => {
    expect(fizzBuzz(1)).toBe('1')
  });
})
