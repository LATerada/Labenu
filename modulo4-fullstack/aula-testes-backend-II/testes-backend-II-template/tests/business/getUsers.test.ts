import { UserBusiness } from "../../src/business/UserBusiness";
import { UserDatabaseMock } from "../mocks/UserDatabaseMock";
import { IdGeneratorMock } from "../mocks/IdGeneratorMock";
import { TokenManagerMock } from "../mocks/TokenManagerMock";
import { HashManagerMock } from "../mocks/HashManagerMock";
import { GetUsersSchema } from "../../src/dtos/user/getUsers.dto";
import { USER_ROLES } from "../../src/models/User";

describe("Testando método getUsers", () => {
  const userBusiness = new UserBusiness(
    new UserDatabaseMock(),
    new IdGeneratorMock(),
    new TokenManagerMock(),
    new HashManagerMock()
  );

  test("Deve retornanr uma lista de users", async () => {
    const input = GetUsersSchema.parse({
      token: "token-mock-astrodev",
    });

    const output = await userBusiness.getUsers(input);

    expect(output).toHaveLength(2);
    expect(output).toContainEqual({
      id: "id-mock-astrodev",
      name: "Astrodev",
      email: "astrodev@email.com",
      role: USER_ROLES.ADMIN,
      createdAt: expect.any(String),
    });
  });
});
