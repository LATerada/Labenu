import { UserBusiness } from "../../src/business/UserBusiness";
import { UserDatabaseMock } from "../mocks/UserDatabaseMock";
import { IdGeneratorMock } from "../mocks/IdGeneratorMock";
import { TokenManagerMock } from "../mocks/TokenManagerMock";
import { HashManagerMock } from "../mocks/HashManagerMock";
import { SignupSchema } from "../../src/dtos/user/signup.dto";

describe("Testando métodos signup", () => {
  const userBusiness = new UserBusiness(
    new UserDatabaseMock(),
    new IdGeneratorMock(),
    new TokenManagerMock(),
    new HashManagerMock()
  );

  test("Deve retornar um token", async () => {
    const input = SignupSchema.parse({
      name: "Ciclano",
      email: "ciclano@email.com",
      password: "ciclano321",
    });

    const output = await userBusiness.signup(input);

    expect(output).toEqual({
      message: "Cadastro realizado com sucesso",
      token: "token-mock",
    });
  });
});
