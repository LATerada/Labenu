export default class Account {
  constructor(
    private id: string,
    private ownerId: string,
    private balance: number,
    private createdAt: string
  ) {}

  public getId = (): string => {
    return this.id;
  };

  public getOwnerId = (): string => {
    return this.ownerId;
  };
  public setOwnerId = (newOwnerId: string): void => {
    this.ownerId = newOwnerId;
  };

  public getBalance = (): number => {
    return this.balance;
  };
  public setBalance = (newBalance: number): void => {
    this.balance = newBalance;
  };

  public getCreatedAt = (): string => {
    return this.createdAt;
  };
}
