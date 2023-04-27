import { Request } from "express";
import { Response } from "express-serve-static-core";
import { BrandBusiness } from "../business/BrandBusiness";

export class BrandController {
  constructor(private brandBusiness: BrandBusiness) {}

  public getBrands = async (req: Request, res: Response) => {
    try {
      const input = { q: req.query.q };
      const output = await this.brandBusiness.getBrands(input);
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
  public getBrandsById = async (req: Request, res: Response) => {
    try {
      const input = { q: req.params.q };
      const output = await this.brandBusiness.getBrands(input);
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
