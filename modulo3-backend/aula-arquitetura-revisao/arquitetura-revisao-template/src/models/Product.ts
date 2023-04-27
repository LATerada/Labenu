export interface ProductDB {
  id: string;
  name: string;
  price: number;
  description: string;
  brand_id: string;
}

export class Product {
  constructor(
    private id: string,
    private name: string,
    private price: number,
    private description: string,
    private brand: {
      id: string;
      name: string;
    }
  ) {}

  public getId(): string {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }
  public setName(value: string): void {
    this.id = value;
  }

  public getPrice(): number {
    return this.price;
  }
  public setPrice(value: number): void {
    this.price = value;
  }

  public getDescription(): string {
    return this.description;
  }
  public setDescription(value: string): void {
    this.description = value;
  }

  public getBrand(): {
    id: string;
    name: string;
  } {
    return this.brand;
  }
  public setBrand(value: { id: string; name: string }): void {
    this.brand = value;
  }
}
