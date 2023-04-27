import { Request, Response } from "express";
import { PingBusiness } from "../business/PingBusiness";

export class PingController {
  constructor(private businessPing: PingBusiness) {}
  getPing = async (req: Request, res: Response): Promise<void> => {
    try {
      const output = await this.businessPing.getPing();

      res.status(200).send(output);
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
