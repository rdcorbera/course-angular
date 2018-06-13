import { Person } from './person';
import { Snake } from './snake';
import { CustomNumber, StringNumber } from './generic-number';
import { Developer } from './decorators/class-sample';

const person = new Person(12345678, 'Mike', 28);
person.sayHello();
person.born('09/09/1987');
person.born(new Date());

const slowSnake = new Snake();
slowSnake.move();

const fastSnake = new Snake();
fastSnake.move(15);

const numericAdd = new CustomNumber();
console.log(numericAdd.add(1,2));

const stringAdd = new StringNumber();
console.log(stringAdd.add("1", "2"));


const dev = new Developer();
dev.hello();
