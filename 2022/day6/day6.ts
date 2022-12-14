function detectUniqueString (input: string, length: number) {
  const recentChars = [];

  for (let i = 0; i < input.length; i += 1) {
    recentChars.push(input[i]);

    if (recentChars.length > length) {
      recentChars.shift();
    } else {
      continue;
    }

    if (new Set(recentChars).size === length) {
      return i + 1;
    }
  }

  return -1;
}

export function part1 (input: string) {
  return detectUniqueString(input, 4);
}

export function part2 (input: string) {
  return detectUniqueString(input, 14);
}
