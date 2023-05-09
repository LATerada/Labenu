import { UserBusiness } from "../../src/business/UserBusiness";
import { GetUserByIdSchema } from "../../src/dtos/user/getUserById.dto";
import { USER_ROLES } from "../../src/models/User";
import { HashManagerMock } from "../mocks/HashManagerMock";
import { IdGeneratorMock } from "../mocks/IdGeneratorMock";
import { TokenManagerMock } from "../mocks/TokenManagerMock";
import { UserDatabaseMock } from "../mocks/UserDatabaseMock";

describe("Testando getUserById", () => {
  const userBusiness = new UserBusiness(
    new UserDatabaseMock(),
    new IdGeneratorMock(),
    new TokenManagerMock(),
    new HashManagerMock()
  );

  test("Deve retornar um usuário", async () => {
    const input = GetUserByIdSchema.parse({
      token: "token-mock-fulano",
      id: "id-mock-fulano",
    });

    const output = await userBusiness.getUserById(input);

    expect(output).toEqual({
      id: "id-mock-fulano",
      name: "Fulano",
      email: "fulano@email.com",
      createdAt: expect.any(String),
      role: USER_ROLES.NORMAL,
    });
  });
});
