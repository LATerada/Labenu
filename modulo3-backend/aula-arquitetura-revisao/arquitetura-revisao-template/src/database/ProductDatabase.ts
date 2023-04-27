import { BaseDatabase } from "./BaseDatabase";
import { Branddatabase } from "./BrandDatabase";

export class ProductDatabase extends BaseDatabase {
  public static TABLE_PRODUCTS = "products";

  public async findProductByName(q: string) {
    const productsDB = await BaseDatabase.connection(
      ProductDatabase.TABLE_PRODUCTS
    )
      .select()
      .where("name", "LIKE", `%${q}%`);
    return productsDB;
  }

  public async findAllProducts() {
    const productsDB = await BaseDatabase.connection(
      ProductDatabase.TABLE_PRODUCTS
    ).select();
    return productsDB;
  }

  public async getProductsAndBrands(q: string | undefined) {
    let productDB;
    if (q) {
      productDB = await this.findProductByName(q);
    } else {
      productDB = await this.findAllProducts();
    }
    const brands = await BaseDatabase.connection(
      Branddatabase.TABLE_BRANDS
    ).select();

    return {
      productDB,
      brands,
    };
  }
}
