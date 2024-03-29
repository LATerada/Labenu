import { Request, Response } from "express";
import { CharacterBusiness } from "../business/CharacterBusiness";

export class CharacterController {
  getCharacters = async (req: Request, res: Response) => {
    try {
      const input = { q: req.query.q };

      const characterBusiness = new CharacterBusiness();
      const output = await characterBusiness.getCharacters(input);

      res.status(200).send(output);
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
  };

  postCharacter = async (req: Request, res: Response) => {
    try {
      const input = {
        id: req.body.id,
        name: req.body.name,
        species: req.body.species,
      };

      const characterBusiness = new CharacterBusiness();
      const output = await characterBusiness.postCharacter(input);

      res.status(200).send(output);
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
  };

  putCharacters = async (req: Request, res: Response) => {
    try {
      const input = {
        idToEdit: req.params.id as string,
        newName: req.body.name as string | undefined,
        newSpecies: req.body.species as string | undefined,
        newStars: req.body.addStars as number | undefined,
        newCoins: req.body.addCoins as number | undefined,
      };

      const characterBusiness = new CharacterBusiness();
      const output = await characterBusiness.putCharacter(input);

      res.status(201).send(output);
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
  };

  deleteCharacter = async (req: Request, res: Response) => {
    try {
      const input = { idToDelete: req.params.id };

      const characterBusiness = new CharacterBusiness();
      const output = await characterBusiness.deleteCharacter(input);

      res.status(201).send(output);
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
  };

  getBalanceById = async (req: Request, res: Response) => {
    try {
      const input = { id: req.params.id };

      const characterBusiness = new CharacterBusiness();
      const output = await characterBusiness.getBalanceById(input);

      res.status(201).send(output);
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
  };
}
