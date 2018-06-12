function Animal<T extends {new(...args:any[]):{}}>(constructor: T) {
	return class extends constructor {

		hello(): void {
			console.log('Guau');
			constructor.prototype.hello.apply(this, arguments);
		}
	}
}

function Person<T extends {new(...args:any[]):{}}>(constructor: T) {
	return class extends constructor {
		firstname = 'John';
		lastname = 'Doe';

		hello(): void {
			console.log('My name is ' + this.firstname + ' ' + this.lastname);
			constructor.prototype.hello.apply(this, arguments);
		}
	}
}

@Animal
@Person
export class Developer {
	hello(): void {
		console.log('I am a developer');
	}
}