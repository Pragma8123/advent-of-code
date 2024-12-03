import { fetchExampleInput, fetchInput } from '../../scripts/prepare/fetchInput';
import { part1, part2 } from './day4';

describe('day3', () => {
  test('part1', async () => {
    expect(part1(await fetchExampleInput(4, 2022))).toBe(2);
    expect(part1(await fetchInput(4, 2022))).toBe(498);
  });
  test('part2', async () => {
    expect(part2(await fetchExampleInput(4, 2022))).toBe(4);
    expect(part2(await fetchInput(4, 2022))).toBe(859);
  });
});
