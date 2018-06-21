export class Profile {
  constructor(
    public id: number,
    public rol: string,
    public firstname: string,
    public lastname: string,
    public email: string,
    public dateOfBirth: Date,
    public biography: string,
    public facebookLink: string,
    public twitterLink: string
  ) { }
}
