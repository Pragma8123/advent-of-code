import _ from 'lodash';

const expand = (input: string): string[] => {
  const [start, end] = input.split('-');
  const startNumber = parseInt(start, 10);
  const endNumber = parseInt(end, 10);
  const result = [];
  for (let i = startNumber; i <= endNumber; i++) {
    result.push(i.toString());
  }
  return result;
};

const parseInput = (input: string): string[][][] => input.split('\n').map((pairs) => pairs.split(',').map(expand));

export function part1 (input: string): number {
  const pairs = parseInput(input);
  let pairsCount = 0;
  for (const [job1, job2] of pairs) {
    const common = _.intersection(job1, job2);
    if (common.toString() === job1.toString() || common.toString() === job2.toString()) {
      pairsCount++;
    }
  }
  return pairsCount;
}

export function part2 (input: string): number {
  const pairs = parseInput(input);
  let overlapCount = 0;
  for (const [job1, job2] of pairs) {
    const common = _.intersection(job1, job2);
    if (common.length > 0) {
      overlapCount++;
    }
  }
  return overlapCount;
}
