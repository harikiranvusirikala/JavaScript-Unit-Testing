import { describe, test, it, expect } from "vitest";
import { max } from "../src/intro";

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
