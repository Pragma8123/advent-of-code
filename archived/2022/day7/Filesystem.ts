export class Filesystem {
  root: Directory;
  currentDirectory: Directory;

  constructor () {
    this.root = new Directory('/', null);
    this.currentDirectory = this.root;
  }

  changeDirectory (path: string) {
    if (path === '/') {
      this.currentDirectory = this.root;
      return;
    }

    if (path === '..') {
      const parent = this.currentDirectory.parent;
      if (parent !== null) {
        this.currentDirectory = parent;
      }
      return;
    }

    const directory = this.getDirectoryIfExists(path);
    if (directory !== null) {
      this.currentDirectory = directory;
      return;
    }

    const newDirectory = new Directory(path, this.currentDirectory);
    this.currentDirectory.children.add(newDirectory);
    this.currentDirectory = newDirectory;
  }

  getDirectoryIfExists (name: string) {
    for (const child of this.currentDirectory.children) {
      if (child instanceof Directory && child.name === name) {
        return child;
      }
    }
    return null;
  }

  addFile (name: string, size: number) {
    this.currentDirectory.children.add(new File(name, size));
  }
}

export class Directory {
  public children: Set<Directory | File>;

  constructor (public name: string, public parent: Directory | null) {
    this.children = new Set();
  }

  public getDirectorySize () {
    let total = 0;
    for (const child of this.children) {
      if (child instanceof Directory) {
        total += child.getDirectorySize();
      } else {
        total += child.size;
      }
    }
    return total;
  }

  public getDirectorySizes () {
    const sizes: number[] = [];
    for (const child of this.children) {
      if (child instanceof Directory) {
        sizes.push(...child.getDirectorySizes());
      }
    }
    sizes.push(this.getDirectorySize());
    return sizes;
  }
}

export class File {
  constructor (public name: string, public size: number) {}
}
