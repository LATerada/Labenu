import { CharacterDB } from "../types";
import { BaseDatabase } from "./BaseDatabase";

export class CharacterDatabase extends BaseDatabase {
  public static TABLE_CHARACTERS = "characters";

  public async findCharacters(q: string | undefined): Promise<CharacterDB[]> {
    let charactersDB;
    if (q) {
      const result = await BaseDatabase.connection(
        CharacterDatabase.TABLE_CHARACTERS
      ).where("name", "LIKE", `%${q}%`);
      charactersDB = result;
    } else {
      const result = await BaseDatabase.connection(
        CharacterDatabase.TABLE_CHARACTERS
      );
      charactersDB = result;
    }
    return charactersDB;
  }

  public async findCharacterById(id: string): Promise<CharacterDB | undefined> {
    const [characterDB]: CharacterDB[] | undefined[] =
      await BaseDatabase.connection(CharacterDatabase.TABLE_CHARACTERS).where({
        id,
      });
    return characterDB;
  }

  public async insertCharacter(newCharacter: CharacterDB): Promise<void> {
    await BaseDatabase.connection(CharacterDatabase.TABLE_CHARACTERS).insert(
      newCharacter
    );
  }

  public async updateCharacter(newCharacter: CharacterDB): Promise<void> {
    await BaseDatabase.connection(CharacterDatabase.TABLE_CHARACTERS)
      .update(newCharacter)
      .where({ id: newCharacter.id });
  }

  public async removeCharacter(id: string): Promise<void> {
    await BaseDatabase.connection(CharacterDatabase.TABLE_CHARACTERS)
      .del()
      .where({ id });
  }
}
