import express from "express";
import { BrandBusiness } from "../business/BrandBusiness";
import { BrandController } from "../controller/BrandController";
import { Branddatabase } from "../database/BrandDatabase";

export const brandRouter = express.Router();

const brandController = new BrandController(
  new BrandBusiness(new Branddatabase())
);

brandRouter.get("/", brandController.getBrands);
brandRouter.get("/:id", brandController.getBrandsById);

