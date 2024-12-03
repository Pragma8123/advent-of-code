import { fetchExampleInput, fetchInput } from '../../scripts/prepare/fetchInput';
import { part1, part2 } from './day5';

describe('day 5', () => {
  test('part1', async () => {
    expect(part1(await fetchExampleInput(5, 2022))).toBe('CMZ');
    expect(part1(await fetchInput(5, 2022))).toBe('FWNSHLDNZ');
  });
  test('part2', async () => {
    expect(part2(await fetchExampleInput(5, 2022))).toBe('MCD');
    expect(part2(await fetchInput(5, 2022))).toBe('RNRGDNFQG');
  });
});
