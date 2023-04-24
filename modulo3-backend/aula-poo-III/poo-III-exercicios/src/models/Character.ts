export class Character {
  constructor(
    private id: string,
    private name: string,
    private species: string,
    private stars: number,
    private coins: number
  ) {}

  getId(): string {
    return this.id;
  }
  getName(): string {
    return this.name;
  }
  getSpecies(): string {
    return this.species;
  }
  getStars(): number {
    return this.stars;
  }
  getCoins(): number {
    return this.coins;
  }

  setName(value: string) {
    this.name = value;
  }
  setSpecies(value: string) {
    this.species = value;
  }

  setStars(value: number) {
    this.stars = value;
  }
  setCoins(value: number) {
    this.coins = value;
  }
}
