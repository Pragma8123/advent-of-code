import _ from "lodash";

// generated by prepare script
export const part1 = (arr) => {
  let lows = 0;

  arr.forEach((line, y) =>
    line.forEach((currVal, x) => {
      const neighbors = [
        arr[y - 1]?.[x],
        arr[y + 1]?.[x],
        arr[y]?.[x - 1],
        arr[y]?.[x + 1],
      ].filter((n) => n !== undefined);

      const isLow = neighbors.every((n) => currVal < n);

      if (isLow) lows += 1 + currVal;
    })
  );

  return lows;
};

export const part2 = (input) => {
  const mappedInput = input.map((row, y) =>
    row.map((val, x) => ({ x, y, val }))
  );

  const lowPoints = [];

  mappedInput.forEach((row, y) => {
    row.forEach((pos, x) => {
      const neighbors = [
        mappedInput[y - 1]?.[x],
        mappedInput[y + 1]?.[x],
        mappedInput[y]?.[x - 1],
        mappedInput[y]?.[x + 1],
      ].filter((n) => n !== undefined);

      const isLowPoint = neighbors.every((n) => pos.val < n.val);

      if (isLowPoint) {
        lowPoints.push(pos);
      } else if (pos.val < 9) {
        pos.lowNeighbors = neighbors.filter((n) => n.val < pos.val);
      }
    });
  });

  const basins = lowPoints.map((lp) => new Set([lp]));

  const remainingPositions = _.flatten(mappedInput)
    .filter((p) => p.val !== 9 && !lowPoints.includes(p))
    .sort((a, b) => a.val - b.val);

  remainingPositions.forEach((fmp) => {
    basins.some((b) => {
      const isInBasin = fmp.lowNeighbors.some((lp) => b.has(lp));
      if (isInBasin) b.add(fmp);
      return isInBasin;
    });
  });

  return basins
    .sort((a, b) => b.size - a.size)
    .slice(0, 3)
    .reduce((t, v) => t * v.size, 1);
};
