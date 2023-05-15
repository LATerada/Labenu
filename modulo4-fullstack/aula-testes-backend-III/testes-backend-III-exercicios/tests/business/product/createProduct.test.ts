import { ZodError } from "zod";
import { ProductBusiness } from "../../../src/business/ProductBusiness";
import { CreateProductSchema } from "../../../src/dtos/product/createProduct.dto";
import { BadRequestError } from "../../../src/errors/BadRequestError";
import { IdGeneratorMock } from "../../mocks/IdGeneratorMock";
import { ProductDatabaseMock } from "../../mocks/ProductDatabaseMock";
import { TokenManagerMock } from "../../mocks/TokenManagerMock";

describe("Testando createProduct", () => {
  const productBusiness = new ProductBusiness(
    new ProductDatabaseMock(),
    new IdGeneratorMock(),
    new TokenManagerMock()
  );

  test("deve retornar mensagem e produto criado", async () => {
    const input = CreateProductSchema.parse({
      name: "Notebook",
      price: 20,
      token: "token-mock-astrodev",
    });

    const output = await productBusiness.createProduct(input);

    expect(output).toEqual({
      message: "Producto cadastrado com sucesso",
      product: {
        id: "id-mock",
        name: "Notebook",
        price: 20,
        createdAt: expect.any(String),
      },
    });
  });

  test("deve retornar erro de token inválido", async () => {
    expect.assertions(2);
    try {
      const input = CreateProductSchema.parse({
        name: "Notebook",
        price: 20,
        token: "token-invalido",
      });

      const output = await productBusiness.createProduct(input);
    } catch (error) {
      if (error instanceof BadRequestError) {
        expect(error.statusCode).toBe(400);
        expect(error.message).toBe("token inválido");
      }
    }
  });

  test("deve retornar erro de acesso", async () => {
    expect.assertions(2);
    try {
      const input = CreateProductSchema.parse({
        name: "Notebook",
        price: 20,
        token: "token-mock-fulano",
      });

      const output = await productBusiness.createProduct(input);
    } catch (error) {
      if (error instanceof BadRequestError) {
        expect(error.statusCode).toBe(400);
        expect(error.message).toBe("somente admins podem acessar");
      }
    }
  });

  test("deve retornar erro de preço inválido pelo Zod", async () => {
    expect.assertions(3);
    try {
      const input = CreateProductSchema.parse({
        name: "Notebook",
        price: 0,
        token: "token-mock-astrodev",
      });

      const output = await productBusiness.createProduct(input);
    } catch (error) {
      if (error instanceof ZodError) {
        console.log(error.issues);
        expect(error.issues[0].code).toBe("too_small");
        expect(error.issues[0].message).toBe("Number must be greater than 0");
        expect(error.issues).toEqual([
          {
            code: "too_small",
            minimum: 0,
            type: "number",
            inclusive: false,
            exact: false,
            message: "Number must be greater than 0",
            path: ["price"],
          },
        ]);
      }
    }
  });

  test("deve retornar erro de preço inválido pelo BadRequestError", async () => {
    expect.assertions(2);
    try {
      const input = ({
        name: "Notebook",
        price: -50,
        token: "token-mock-astrodev",
      });

      const output = await productBusiness.createProduct(input);
    } catch (error) {
      if (error instanceof BadRequestError) {
        expect(error.statusCode).toBe(400);
        expect(error.message).toBe("preço não pode ser 0 ou negativo");
      }
    }
  });
});
