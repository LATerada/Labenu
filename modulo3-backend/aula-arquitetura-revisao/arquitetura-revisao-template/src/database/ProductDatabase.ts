import { ProductDB } from "../models/Product";
import { BaseDatabase } from "./BaseDatabase";

export class ProductDatabase extends BaseDatabase {
  public static TABLE_PRODUCTS = "products";

  public async findProducts(q: string | undefined): Promise<ProductDB[]> {
    if (q) {
      const productsDB = await BaseDatabase.connection(
        ProductDatabase.TABLE_PRODUCTS
      ).where("name", "LIKE", `%${q}%`);
      return productsDB;
    } else {
      const productsDB = await BaseDatabase.connection(
        ProductDatabase.TABLE_PRODUCTS
      );
      return productsDB;
    }
  }
}
