import express from "express";
import cors from "cors";
import { productRouter } from "./routers/productRouter";
import { brandRouter } from "./routers/brandRouter";
import { pingRouter } from "./routers/pingRouter";

const app = express();

app.use(cors());
app.use(express.json);

app.listen(3003, () => console.log(`Servidor rodando na porta ${3003}`));

app.use("/ping", pingRouter);

app.use("/products", productRouter);

app.use("/brands", brandRouter);
