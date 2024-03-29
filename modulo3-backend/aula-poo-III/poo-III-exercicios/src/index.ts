import express, { Request, Response } from "express";
import cors from "cors";
import { CharacterController } from "./controllers/CharacterController";

const app = express();

app.use(cors());
app.use(express.json());

app.listen(3003, () => {
  console.log(`Servidor rodando na porta ${3003}`);
});

app.get("/ping", async (req: Request, res: Response) => {
  try {
    res.status(200).send({ message: "Pong!" });
  } catch (error) {
    console.log(error);

    if (req.statusCode === 200) {
      res.status(500);
    }

    if (error instanceof Error) {
      res.send(error.message);
    } else {
      res.send("Erro inesperado");
    }
  }
});

const characterController = new CharacterController();

app.get("/characters", characterController.getCharacters);

app.post("/characters", characterController.postCharacter);

app.put("/characters/:id", characterController.putCharacters);

app.delete("/characters/:id", characterController.deleteCharacter);

app.get("/characters/:id", characterController.getBalanceById);
