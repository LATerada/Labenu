import { Request, Response } from "express";
import { ProductBusiness } from "../business/ProductBusiness";

export class ProductController {
  constructor(private productBusiness: ProductBusiness) {}

  getProducts = async (req: Request, res: Response) => {
    try {
      const input = { q: req.query.q };

      const output = this.productBusiness.getProducts(input);
      console.log(output);
      res.status(201).send(output);
    } catch (error) {
      console.log(error);

      if (error instanceof Error) {
        res.status(500).send(error.message);
      } else {
        res.status(500).send("Erro inesperado");
      }
    }
  };

  
}
