import { Filesystem } from './Filesystem';

const parseFilesystem = (input: string): Filesystem => {
  const filesystem = new Filesystem();

  const lines = input.split('\n');
  for (const line of lines) {
    if (line[0] === '$') {
      const [, command, path] = line.split(' ');

      if (command === 'cd') {
        filesystem.changeDirectory(path);
      }

      continue;
    }

    if (line[0] === 'd') {
      continue;
    }

    const [size, name] = line.split(' ');
    filesystem.addFile(name, Number(size));
  }

  return filesystem;
};

export function part1 (input: string) {
  const filesystem = parseFilesystem(input);

  const sizes = filesystem.root.getDirectorySizes();

  let total = 0;
  for (const size of sizes) {
    if (size <= 100_000) {
      total += size;
    }
  }

  return total;
}

export function part2 (input: string) {
  const filesystem = parseFilesystem(input);

  const DISK_SIZE = 70_000_000;
  const SPACE_NEEDED = 30_000_000;

  const freeSpace = DISK_SIZE - filesystem.root.getDirectorySize();

  const bigEnough: number[] = [];
  for (const size of filesystem.root.getDirectorySizes()) {
    if (size + freeSpace >= SPACE_NEEDED) {
      bigEnough.push(size);
    }
  }

  return Math.min(...bigEnough);
}
