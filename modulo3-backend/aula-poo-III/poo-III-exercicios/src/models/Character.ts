export class Character {
  constructor(
    private id: string,
    private name: string,
    private species: string,
    private stars: number,
    private coins: number
  ) {}

  public getId(): string {
    return this.id;
  }
  public getName(): string {
    return this.name;
  }
  public getSpecies(): string {
    return this.species;
  }
  public getStars(): number {
    return this.stars;
  }
  public getCoins(): number {
    return this.coins;
  }

  public setName(value: string) {
    this.name = value;
  }
  public setSpecies(value: string) {
    this.species = value;
  }

  public setStars(value: number) {
    this.stars = value;
  }
  public setCoins(value: number) {
    this.coins = value;
  }
}
