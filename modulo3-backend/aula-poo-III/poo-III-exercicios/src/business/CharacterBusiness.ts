import { CharacterDatabase } from "../database/CharacterDatabase";
import { Character } from "../models/Character";
import { CharacterDB } from "../types";

export class CharacterBusiness {
  public getCharacters = async (input: any) => {
    const { q } = input;
    const characterDatabase = new CharacterDatabase();
    const charactersDB: CharacterDB[] = await characterDatabase.findCharacters(
      q
    );

    const characters = charactersDB.map(
      (characterDB) =>
        new Character(
          characterDB.id,
          characterDB.name,
          characterDB.species,
          characterDB.stars,
          characterDB.coins
        )
    );

    const output = {
      characters,
    };

    return output;
  };
  public postCharacter = async (input: any) => {
    const { id, name, species } = input;

    if (typeof id !== "string") {
      throw new Error("'id' deve ser string");
    }

    if (typeof name !== "string") {
      throw new Error("'name' deve ser string");
    }

    if (typeof species !== "string") {
      throw new Error("'species' deve ser string");
    }

    const characterDatabase = new CharacterDatabase();
    const characterDBExists = await characterDatabase.findCharacterById(id);

    if (characterDBExists) {
      throw new Error("'id' já existe");
    }

    const newCharacter = new Character(id, name, species, 0, 0);

    const newCharacterDB: CharacterDB = {
      id: newCharacter.getId(),
      name: newCharacter.getName(),
      species: newCharacter.getSpecies(),
      stars: newCharacter.getStars(),
      coins: newCharacter.getCoins(),
    };

    await characterDatabase.insertCharacter(newCharacterDB);

    const output = {
      message: "Personagem criado com sucesso",
      newCharacter,
    };

    return output;
  };
  public putCharacter = async (input: any) => {
    const { idToEdit, newName, newSpecies, newStars, newCoins } = input;
    if (newName !== undefined) {
      if (typeof newName !== "string") {
        throw new Error("'name' deve ser string");
      }
    }

    if (newSpecies !== undefined) {
      if (typeof newSpecies !== "string") {
        throw new Error("'species' deve ser string");
      }
    }

    if (newStars !== undefined) {
      if (typeof newStars !== "number") {
        throw new Error("'stars' deve ser number");
      }
    }

    if (newCoins !== undefined) {
      if (typeof newCoins !== "number") {
        throw new Error("'coins' deve ser number");
      }
    }

    const characterDatabase = new CharacterDatabase();
    const characterDBExists = await characterDatabase.findCharacterById(
      idToEdit
    );

    if (!characterDBExists) {
      throw new Error("'id' não encontrado");
    }

    const character = new Character(
      characterDBExists.id,
      newName ? newName : characterDBExists.name,
      newSpecies ? newSpecies : characterDBExists.species,
      newStars ? characterDBExists.stars + newStars : characterDBExists.stars,
      newCoins ? characterDBExists.coins + newCoins : characterDBExists.coins
    );

    const newCharacterDB: CharacterDB = {
      id: character.getId(),
      name: character.getName(),
      species: character.getSpecies(),
      stars: character.getStars(),
      coins: character.getCoins(),
    };

    await characterDatabase.updateCharacter(newCharacterDB);

    const output = {
      message: "Personagem editado com sucesso",
      character: newCharacterDB,
    };

    return output;
  };
  public deleteCharacter = async (input: any) => {
    const { idToDelete } = input;

    if (idToDelete[0] !== "c") {
      throw new Error("'id' deve iniciar com 'c'");
    }

    const characterDatabase = new CharacterDatabase();
    const characterDBExists = await characterDatabase.findCharacterById(
      idToDelete
    );

    if (!characterDBExists) {
      throw new Error("'id' não encontrado");
    }

    await characterDatabase.removeCharacter(idToDelete);

    const output = {
      message: "Personagem deletado com sucesso",
    };

    return output;
  };

  public getBalanceById = async (input: any) => {
    const { id } = input;

    const characterDatabase = new CharacterDatabase();
    const characterDB = await characterDatabase.findCharacterById(id);

    if (!characterDB) {
      throw new Error("Personagem não existe");
    }

    const character = new Character(
      characterDB.id,
      characterDB.name,
      characterDB.species,
      characterDB.stars,
      characterDB.coins
    );

    const balanceInfo = {
      name: character.getName(),
      totalCoins: character.getCoins(),
      totalStars: character.getStars(),
    };

    const output = {
      balanceInfo,
    };

    return output;
  };
}
