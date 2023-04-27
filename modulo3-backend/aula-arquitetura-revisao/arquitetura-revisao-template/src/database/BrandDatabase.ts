import { BaseDatabase } from "./BaseDatabase";

export class Branddatabase extends BaseDatabase {
  public static TABLE_BRANDS = "brands";

  public async findBrands(q: string | undefined) {
    const brandsDB = await BaseDatabase.connection(Branddatabase.TABLE_BRANDS);
    return brandsDB;
  }

  public async findBrandById(id: string) {
    const [brand] = await BaseDatabase.connection(
      Branddatabase.TABLE_BRANDS
    ).where({ id });
    return brand;
  }
}
