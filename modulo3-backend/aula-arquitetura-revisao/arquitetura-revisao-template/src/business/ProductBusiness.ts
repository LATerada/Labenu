import { ProductDatabase } from "../database/ProductDatabase";
import { Product } from "../models/Product";

export class ProductBusiness {
  constructor(private productDatabase = new ProductDatabase()) {}

  public async getProducts(input: any) {
    const { q } = input;

    // const { productsDB, brandsDB } =
    //   await this.productDatabase.getProductsAndBrands(q);

    // const products = productsDB.map((productDB) => {
    //   const product = new Product(
    //     productDB.id,
    //     productDB.name,
    //     productDB.price,
    //     productDB.description,
    //     getBrand(productDB.brand_id)
    //   );
    //   return product;
    // });

    // function getBrand(brandId: string) {
    //   const brand = brandsDB.find((brandDB) => brandDB.id === brandId);
    //   return brand;
    // }

    // console.log(products);
    const output = {
      // products,
    };
    return output;
  }
}
