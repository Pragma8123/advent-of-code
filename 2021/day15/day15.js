// generated by prepare script
class Position {
  constructor(x, y, value, map) {
    this.x = x;
    this.y = y;
    this.value = value;
    this.g = Infinity;
    this.map = map;
  }

  get neighbors() {
    if (!this._neighbors) {
      this._neighbors = [
        this.map.getPosition(this.x - 1, this.y),
        this.map.getPosition(this.x + 1, this.y),
        this.map.getPosition(this.x, this.y + 1),
        this.map.getPosition(this.x, this.y - 1),
      ].filter(Boolean);
    }

    return this._neighbors;
  }
}

class Grid {
  constructor(input) {
    this.data = input.map((row, y) =>
      row.map((value, x) => new Position(x, y, value, this))
    );

    this.maxX = input[0].length - 1;
    this.maxY = input.length - 1;
  }

  getPosition(x, y) {
    return this.data[y]?.[x] ?? null;
  }
}

const spliceLowest = (arr) => {
  if (!arr.length) return null;
  if (arr.length === 1) return arr[0];

  let lowest = 0;
  for (let i = 1; i < arr.length; i += 1) {
    if (arr[i].g < arr[lowest].g) lowest = i;
  }

  return arr.splice(lowest, 1)[0];
};

const dijkstra = (grid) => {
  const start = grid.getPosition(0, 0);
  const end = grid.getPosition(grid.maxX, grid.maxY);

  start.g = 0;

  const open = [start];
  while (open.length) {
    const curr = spliceLowest(open);

    if (curr === end) return curr.g;

    for (const pos of curr.neighbors) {
      if (pos.visited) continue;

      const g = curr.g + pos.value;
      if (g < pos.g) pos.g = g;
      if (!open.includes(pos)) open.push(pos);
    }

    curr.visited = true;
  }

  return null;
};

const addToValue = (a, b) => ((a + b - 1) % 9) + 1;

export const enlargeInput = (input) => {
  let wider = input.map((row) => {
    const widerRow = [...row];
    for (let i = 1; i < 5; i += 1) {
      widerRow.push(...row.map((n) => addToValue(n, i)));
    }
    return widerRow;
  });

  let output = [...wider];
  for (let i = 1; i < 5; i += 1) {
    output.push(...wider.map((row) => row.map((n) => addToValue(n, i))));
  }

  return output;
};

export const part1 = (input) => dijkstra(new Grid(input));
export const part2 = (input) => part1(enlargeInput(input));
