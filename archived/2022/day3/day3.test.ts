import { fetchExampleInput, fetchInput } from '../../scripts/prepare/fetchInput';
import { part1, part2 } from './day3';

describe('Day 3', () => {
  test('part1', async () => {
    expect(part1(await fetchExampleInput(3, 2022))).toBe(157);
    expect(part1(await fetchInput(3, 2022))).toBe(7568);
  });
  test('part2', async () => {
    expect(part2(await fetchExampleInput(3, 2022))).toBe(70);
    expect(part2(await fetchInput(3, 2022))).toBe(2780);
  });
});
