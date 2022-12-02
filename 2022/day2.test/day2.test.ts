import { fetchInput, fetchExampleInput } from '../../scripts/prepare/fetchInput';
import { part1, part2 } from './day2';

describe('day2', () => {
  test('part1', async () => {
    expect(part1(await fetchExampleInput(2, 2022))).toBe(15);
    expect(part1(await fetchInput(2, 2022))).toBe(9759);
  });

  test('part2', async () => {
    expect(part2(await fetchExampleInput(2, 2022))).toBe(12);
    expect(part2(await fetchInput(2, 2022))).toBe(12429);
  });
});
