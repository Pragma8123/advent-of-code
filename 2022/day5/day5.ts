class Cargo {
  constructor (public crates: string[][], public instructions: number[][]) {}
}

function parseInput (input: string) {
  const [cratesInput, instructionsInput] = input.split('\n\n').map((section) => section.split('\n'));

  // Remove the row numbers from our input
  cratesInput.pop();

  // Initialize our 2D crates array
  const crates = new Array<string[]>();
  for (let i = 0; i < cratesInput[0].length; i += 1) {
    crates.push(new Array<string>());
  }

  // Fill our crate stacks
  for (let i = cratesInput.length - 1; i >= 0; i -= 1) {
    let x = 0;
    for (let j = 1; j < cratesInput[i].length; j += 4) {
      if (cratesInput[i][j] !== ' ') {
        crates[x].push(cratesInput[i][j]);
      }
      x += 1;
    }
  }

  // Parse our instructions
  const instructions = instructionsInput.map((instruction) => {
    const nums = instruction.match(/(\d+)/g);
    if (nums !== null) {
      return nums.map(Number);
    }
    return [];
  });

  return new Cargo(crates, instructions);
}

export function part1 (input: string): string {
  const cargo = parseInput(input);
  for (const instruction of cargo.instructions) {
    const [move, from, to] = instruction;
    for (let i = 0; i < move; i += 1) {
      const crate = cargo.crates[from - 1].pop();
      if (crate !== undefined) {
        cargo.crates[to - 1].push(crate);
      }
    }
  }

  let result = '';
  cargo.crates.forEach((row) => {
    const temp = row.pop();
    if (temp !== undefined) {
      result += temp;
    }
  });
  return result;
}

export function part2 (input: string): string {
  const cargo = parseInput(input);
  for (const instruction of cargo.instructions) {
    const [move, from, to] = instruction;
    const tempStack = cargo.crates[from - 1].splice(cargo.crates[from - 1].length - move, move);
    cargo.crates[to - 1].push(...tempStack);
  }

  let result = '';
  cargo.crates.forEach((row) => {
    const temp = row.pop();
    if (temp !== undefined) {
      result += temp;
    }
  });
  return result;
}
