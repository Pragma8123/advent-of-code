import { solvePart1 } from './day14';

describe('DAY 14', () => {
  describe('Part 1', () => {

    test('Example 1', () => {
      const input = [
        '10 ORE => 10 A',
        '1 ORE => 1 B',
        '7 A, 1 B => 1 C',
        '7 A, 1 C => 1 D',
        '7 A, 1 D => 1 E',
        '7 A, 1 E => 1 FUEL',
      ];

      expect(solvePart1(input)).toEqual(true);
    });
  })
});
