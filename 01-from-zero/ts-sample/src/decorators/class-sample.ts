function Person<T extends {new(...args:any[]):{}}>(constructor: T) {
	return class extends constructor {

		firstname = 'John';
		lastname = 'Doe';

		hello(): void {
			console.log('My name is %s %s', this.firstname, this.lastname);
			constructor.prototype.hello.apply(this, arguments);
		}
	}
}

function Employee<T extends {new(...args:any[]):{}}>(constructor: T) {
	return class extends constructor {

		id = 12345678;

		hello(): void {
			console.log('My ID number is %i', this.id);
			constructor.prototype.hello.apply(this, arguments);
		}
	}
}

@Person
@Employee
export class Developer {
	hello(): void {
		console.log('I am a developer');
	}
}