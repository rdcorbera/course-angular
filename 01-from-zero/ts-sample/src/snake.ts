import { Animal } from "./animal";

export class Snake implements Animal {
  
  private movement: number;

  move(initialMovement: number = 5): void {
    this.movement = initialMovement;

    console.log('Snake speed move: %i', this.movement);
  }
}