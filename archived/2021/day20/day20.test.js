// generated by prepare script
import { readInput } from '../../helpers/readInput.js';
import { part1, part2 } from './day20.js';

const parseOpts = {
  transform: (o) => {
    const [keyStr, imageStr] = o.split(/\n\n/);
    const key = keyStr.split('');
    const imageData = imageStr.split(/\n/);

    return [key, imageData];
  }
};

describe('2021 - Day 20', () => {
  describe('Part 1', () => {
    describe('Example Input', () => {
      const exampleInput = readInput('./2021/day20/example-input', parseOpts);

      it('returns the expected result', () => {
        expect(part1(exampleInput)).toEqual(35);
      });
    });

    describe('Final Input', () => {
      const input = readInput('./2021/day20/input', parseOpts);

      it('returns the expected result', () => {
        expect(part1(input)).toEqual(5432);
      });
    });
  });

  describe.skip('Part 2', () => {
    describe('Example Input', () => {
      const exampleInput = readInput('./2021/day20/example-input', parseOpts);

      it('returns the expected result', () => {
        expect(part2(exampleInput)).toEqual(3351);
      });
    });

    describe('Final Input', () => {
      const input = readInput('./2021/day20/input', parseOpts);

      it('returns the expected result', () => {
        expect(part2(input)).toEqual(16016);
      });
    });
  });
});
