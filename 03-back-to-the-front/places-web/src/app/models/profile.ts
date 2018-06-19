export class Profile {
  constructor(
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
