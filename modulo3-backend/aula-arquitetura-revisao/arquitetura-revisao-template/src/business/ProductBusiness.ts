import { ProductDatabase } from "../database/ProductDatabase";
import { Product } from "../models/Product";

export class ProductBusiness {
  constructor(private productDatabase = new ProductDatabase()) {}

  public async getProducts(input: any) {
    const { q } = input;

    const productsDB = await this.productDatabase.findProducts(q);

    // const products = productsDB.map(
    //   (productDB) =>
    //     new Product(
    //       productDB.id,
    //       productDB.name,
    //       productDB.price,
    //       productDB.description,
    //       productDB.brand_id
    //     )
    // );
    console.log(productsDB);
    const output = {
      productsDB,
    };
    return output;
  }
}
