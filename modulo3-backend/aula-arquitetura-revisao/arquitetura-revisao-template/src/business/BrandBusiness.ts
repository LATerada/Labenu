import { Branddatabase } from "../database/BrandDatabase";
import { Brand } from "../models/Brand";

export class BrandBusiness {
  constructor(private brandDatabase: Branddatabase) {}

  public async getBrands(input: any) {
    const { q } = input;

    const brandsDB = await this.brandDatabase.findBrands(q);

    const brands = brandsDB.map((brandDB) => {
      const brand = new Brand(brandDB.id, brandDB.name);
      return brand;
    });

    return brands;
  }

  public async getBrandById(input: any) {
    const { id } = input;

    const brandDB = await this.brandDatabase.findBrandById(id);

    if (brandDB) {
      throw new Error("'id' não encontrada");
    }

    const brand = new Brand(brandDB.id, brandDB.name);

    return brand;
  }
}
