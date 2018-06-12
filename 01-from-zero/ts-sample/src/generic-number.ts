export class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}

export class CustomNumber extends GenericNumber<number> {

  constructor() {
    super();

    this.zeroValue = 0;

    this.add = (x, y) => { return x + y; };
  }
}

export class StringNumber extends GenericNumber<string> {
  constructor() {
    super();

    this.zeroValue = "";

    this.add = (x, y) => { return x + y; };
  }
}