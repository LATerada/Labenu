import express from "express";
import { PingBusiness } from "../business/PingBusiness";
import { PingController } from "../controller/PingController";

export const pingRouter = express.Router();

const controller = new PingController(new PingBusiness());

pingRouter.get("/", controller.getPing);
