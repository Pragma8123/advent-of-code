import { fetchExampleInput, fetchInput } from '../../scripts/prepare/fetchInput';
import { part1, part2 } from './day6';

describe('day6', () => {
  test('part1', async () => {
    expect(part1(await fetchExampleInput(6, 2022))).toBe(7);
    expect(part1(await fetchInput(6, 2022))).toBe(1850);
  });

  test('part2', async () => {
    expect(part2(await fetchExampleInput(6, 2022))).toBe(19);
    expect(part2(await fetchInput(6, 2022))).toBe(2823);
  });
});
