import { DateOfBirth } from "./day-of-birth";

export class Person {
	constructor(
		private id: number,
		public name: string,
		public age: number
	) { }

	public sayHello(): void {
		console.log('Hello, my name is %s and I am %i years old', this.name, this.age);
	}

	public born(dob: DateOfBirth): void {
    if (typeof dob === "string")
      console.log('I born %s', dob);
    else if (dob instanceof String)
      console.log('I born %s', dob);
    else if (dob instanceof Date)
      console.log('I born %s', dob.toDateString());
    else
      console.log('missing type');
  }
}
