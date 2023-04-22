import { Request, Response } from "express";
import { CharacterDatabase } from "../database/CharacterDatabase";
import { Character } from "../models/Character";
import { CharacterDB } from "../types";

export class CharacterController {
  getCharacters = async (req: Request, res: Response) => {
    try {
      const q = req.query.q as string | undefined;

      const characterDatabase = new CharacterDatabase();
      const charactersDB: CharacterDB[] =
        await characterDatabase.findCharacters(q);

      const characters = charactersDB.map(
        (characterDB) =>
          new Character(
            characterDB.id,
            characterDB.name,
            characterDB.species,
            characterDB.stars
          )
      );

      res.status(200).send(characters);
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
      const { id, name, species } = req.body;

      if (typeof id !== "string") {
        res.status(400);
        throw new Error("'id' deve ser string");
      }

      if (typeof name !== "string") {
        res.status(400);
        throw new Error("'name' deve ser string");
      }

      if (typeof species !== "string") {
        res.status(400);
        throw new Error("'species' deve ser string");
      }

      const characterDatabase = new CharacterDatabase();
      const characterDBExists = await characterDatabase.findCharacterById(id);

      if (characterDBExists) {
        res.status(400);
        throw new Error("'id' já existe");
      }

      const newCharacter = new Character(id, name, species, 0);

      const newCharacterDB: CharacterDB = {
        id: newCharacter.getId(),
        name: newCharacter.getName(),
        species: newCharacter.getSpecies(),
        stars: newCharacter.getStars(),
      };

      await characterDatabase.insertCharacter(newCharacterDB);

      res.status(200).send(newCharacter);
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
      const idToEdit = req.params.id;

      const newName = req.body.name;
      const newSpecies = req.body.species;
      const newStars = req.body.stars;

      if (newName !== undefined) {
        if (typeof newName !== "string") {
          res.status(400);
          throw new Error("'name' deve ser string");
        }
      }

      if (newSpecies !== undefined) {
        if (typeof newSpecies !== "string") {
          res.status(400);
          throw new Error("'species' deve ser string");
        }
      }

      if (newStars !== undefined) {
        if (typeof newStars !== "number") {
          res.status(400);
          throw new Error("'stars' deve ser number");
        }
      }

      const characterDatabase = new CharacterDatabase();
      const characterDBExists = await characterDatabase.findCharacterById(
        idToEdit
      );

      if (!characterDBExists) {
        res.status(404);
        throw new Error("'id' não encontrado");
      }

      const character = new Character(
        characterDBExists.id,
        newName ? newName : characterDBExists.name,
        newSpecies ? newSpecies : characterDBExists.species,
        newStars ? newStars : characterDBExists.stars
      );

      const newCharacterDB: CharacterDB = {
        id: character.getId(),
        name: character.getName(),
        species: character.getSpecies(),
        stars: character.getStars(),
      };

      await characterDatabase.updateCharacter(newCharacterDB);
      res.status(201).send(character);
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
      const idToDelete = req.params.id;

      if (idToDelete[0] !== "c") {
        res.status(400);
        throw new Error("'id' deve iniciar com 'c'");
      }

      const characterDatabase = new CharacterDatabase();
      const characterDBExists = characterDatabase.findCharacterById(idToDelete);

      if (!characterDBExists) {
        res.status(404).send("'id' não encontrado");
      }

      await characterDatabase.removeCharacter(idToDelete);

      res.status(201).send("Personagem deletado com sucesso.");
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
