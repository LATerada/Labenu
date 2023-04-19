export class Character {
  constructor(
    private id: string,
    private name: string,
    private species: string,
    private stars: number
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

  public setName(value: string) {
    this.name = value;
  }
  public setSpecies(value: string) {
    this.species = value;
  }
  public setStars(value: number) {
    this.stars = value;
  }

  //   get charId(): string {
  //     return this.id;
  //   }
  //   get charName(): string {
  //     return this.name;
  //   }
  //   get charSpecies(): string {
  //     return this.species;
  //   }

  //   set charName(value: string) {
  //     this.name = value;
  //   }
  //   set charSpecies(value: string) {
  //     this.species = value;
  //   }
}
