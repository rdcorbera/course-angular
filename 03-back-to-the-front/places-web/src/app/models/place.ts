import { Comment } from './comment';

export class Place {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public categories: string[],
    public address: string,
    public latitude: number,
    public longitude: number,
    public comments: Comment[]
  ) {}
}
