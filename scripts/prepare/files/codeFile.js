import { File } from "./file.js";

export class CodeFile extends File {
  get fileName() {
    return `day${this.day}.js`;
  }

  createFileContents() {
    return `// generated by prepare script
export const part1 = (arr) => {
  return false;
};

export const part2 = (arr) => {
  return false;
};\n`;
  }
}