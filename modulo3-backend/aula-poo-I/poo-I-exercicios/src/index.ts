import express, { Request, Response } from "express";
import cors from "cors";
import { db } from "./database/knex";
import { TVideoDB } from "./types";
import Video from "./models/Video";
import { title } from "process";

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

app.get("/videos", async (req: Request, res: Response) => {
  try {
    const q = req.query.q;

    let videosDB;

    if (q) {
      const result: TVideoDB[] = await db("videos").where(
        "title",
        "LIKE",
        `%${q}%`
      );
      videosDB = result;
    } else {
      const result: TVideoDB[] = await db("videos");
      videosDB = result;
    }

    const videos: Video[] = videosDB.map(
      (videoDB) =>
        new Video(
          videoDB.id,
          videoDB.title,
          videoDB.duration,
          videoDB.upload_at
        )
    );

    res.status(200).send(videos);
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

app.post("/videos", async (req: Request, res: Response) => {
  try {
    const { id, title, duration } = req.body;

    if (typeof id !== "string") {
      res.status(400);
      throw new Error("'id' deve ser string");
    }

    if (typeof title !== "string") {
      res.status(400);
      throw new Error("'title' deve ser string");
    }

    if (typeof duration !== "number") {
      res.status(400);
      throw new Error("'duration' deve ser number");
    }

    const [videoIdAlreadyExists]: TVideoDB[] | undefined[] = await db(
      "videos"
    ).where({ id });

    if (videoIdAlreadyExists) {
      res.status(400);
      throw new Error("'id' já existe");
    }

    const newVideo: Video = new Video(
      id,
      title,
      duration,
      new Date().toISOString()
    );

    const newVideoDB: TVideoDB = {
      id: newVideo.getId(),
      title: newVideo.getTitle(),
      duration: newVideo.getDuration(),
      upload_at: newVideo.getUploadAt(),
    };

    await db("videos").insert(newVideoDB);
    const [videoDB]: TVideoDB[] = await db("videos").where({ id });

    res
      .status(202)
      .send({ message: "Video adicionado com sucesso", send: videoDB });
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

app.put("/videos/:id", async (req: Request, res: Response) => {
  try {
    const idToEdit = req.params.id;

    const newTitle = req.body.title as string;
    const newDuration = req.body.duration as number;

    if (newTitle !== undefined) {
      if (typeof newTitle !== "string") {
        res.status(400);
        throw new Error("'title' deve ser string");
      }
    }

    if (newTitle !== undefined) {
      if (typeof newDuration !== "number") {
        res.status(400);
        throw new Error("'duration' deve ser number");
      }
    }

    const [videoToEdit]: TVideoDB[] | undefined[] = await db("videos").where({
      id: idToEdit,
    });

    if (!videoToEdit) {
      res.status(404).send("'id' nao encontrado");
    }

    const newVideo: Video = new Video(
      idToEdit,
      newTitle,
      newDuration,
      new Date().toISOString()
    );

    const newVideoDB: TVideoDB = {
      id: newVideo.getId(),
      title: newVideo.getTitle(),
      duration: newVideo.getDuration(),
      upload_at: newVideo.getUploadAt(),
    };

    await db("videos").update(newVideoDB).where({ id: idToEdit });
    const [videoDB]: TVideoDB[] = await db("videos").where({ id: idToEdit });

    res
      .status(202)
      .send({ message: "Video editado com sucesso", send: videoDB });
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

app.delete("/videos/:id", async (req: Request, res: Response) => {
  try {
    const idToDelete = req.params.id;

    if (idToDelete[0] !== "v") {
      res.status(400).send("'id' deve iniciar com 'v'");
    }

    const [videoToDelete]: TVideoDB[] | undefined[] = await db("videos").where({
      id: idToDelete,
    });

    if (!videoToDelete) {
      res.status(404).send("'id' não encontrado");
    }

    await db("videos").del().where({ id: idToDelete });
    res.status(202).send("Video deletado com sucesso");
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
