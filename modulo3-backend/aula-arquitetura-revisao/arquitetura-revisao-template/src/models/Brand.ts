export class Brand {
  constructor(private id: string, private name: string) {}

  public getId() {
    return this.id;
  }

  public getName() {
    return this.name;
  }
  public setName(value: string): void {
    this.name = value;
  }
}
