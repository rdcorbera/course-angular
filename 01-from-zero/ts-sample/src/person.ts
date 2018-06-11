export class Person {
	constructor(
		private id: number,
		public name: string,
		public age: number
	) { }

	public sayHello(): void {
		console.log('Hello, my name is %s and I am %i years old', this.name, this.age);
	}
}
