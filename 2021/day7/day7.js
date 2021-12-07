// generated by prepare script
const calculateCma = (nums) =>
  nums.reduce((p, c, i) => p + (c - p) / (i + 1), 0);

export const part1 = (arr) => {
  const avg = calculateCma(arr);
  const min = Math.floor(avg / 2);
  const max = Math.ceil(avg * 1.5);

  let winner = Infinity;

  for (let a = min; a <= max; a += 1) {
    let t = arr.reduce((t, b) => t + Math.abs(b - a), 0);
    if (t < winner) winner = t;
  }

  return winner;
};

export const part2 = (arr) => {
  const avg = calculateCma(arr);
  const min = Math.floor(avg / 2);
  const max = Math.ceil(avg * 1.5);

  let winner = Infinity;

  for (let a = min; a <= max; a += 1) {
    let t = 0;

    arr.forEach((b) => {
      const diff = Math.abs(b - a);
      let gas = 1;
      for (let i = 0; i < diff; i += 1) t += gas++;
    });

    if (t < winner) winner = t;
  }

  return winner;
};
