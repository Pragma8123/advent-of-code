// generated by prepare script
const calculateCma = (nums) =>
  nums.reduce((p, c, i) => p + (c - p) / (i + 1), 0);

export const part1 = (arr) => {
  const avg = calculateCma(arr);
  const min = Math.floor(avg / 2);
  const max = avg + avg - min;

  let winner = Infinity;

  for (let a = min; a <= max; a += 1) {
    let total = arr.reduce((t, b) => t + Math.abs(b - a), 0);
    if (total < winner) winner = total;
  }

  return winner;
};

export const part2 = (arr) => {
  const avg = calculateCma(arr);
  const min = Math.floor(avg / 2);
  const max = avg + avg - min;

  let winner = Infinity;

  for (let a = min; a <= max; a += 1) {
    let total = 0;

    for (const b of arr) {
      const dist = Math.abs(b - a);
      let gas = 1;
      for (let i = 0; i < dist; i += 1) total += gas++;
    }

    if (total < winner) winner = total;
  }

  return winner;
};
