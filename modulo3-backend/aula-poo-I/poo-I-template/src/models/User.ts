export default class User {
  constructor(
    private id: string,
    private name: string,
    private email: string,
    private password: string,
    private createdAt: string
  ) {}

  public getId = (): string => {
    return this.id;
  };

  public getName = (): string => {
    return this.id;
  };
  public setName = (newName: string): void => {
    this.id = newName;
  };

  public getEmail = (): string => {
    return this.id;
  };
  public setEmail = (newEmail: string): void => {
    this.id = newEmail;
  };

  public getPassword = (): string => {
    return this.id;
  };
  public setPassword = (newPassword: string): void => {
    this.id = newPassword;
  };

  public getCreatedAt = (): string => {
    return this.createdAt;
  };
}

const user1 = new User("u000", "One", "one@email.com", "1111111", "2222-10-10");
