import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Calculator from "../components/Calculator";

describe("Testes da Calculator", () => {
  test("Deve renderizar corretamente dos dígitos de operações +, -, *, e /.", () => {
    render(<Calculator />);

    const element1 = screen.getByText("+");
    const element2 = screen.getByText("-");
    const element3 = screen.getByText("*");
    const element4 = screen.getByText("/");

    expect(element1).toBeInTheDocument();
    expect(element2).toBeInTheDocument();
    expect(element3).toBeInTheDocument();
    expect(element4).toBeInTheDocument();

    screen.logTestingPlaygroundURL();
    screen.debug();
  });

  test("Deve renderizar corretamente a operação de multiplicação.", async () => {
    const user = userEvent.setup();

    render(<Calculator />);

    screen.debug();
    const elemnt1 = screen.getByRole("button", {
      name: /5/i,
    });
    const operation = screen.getByRole("button", { name: /\*/i });
    const element2 = screen.getByText(/2/i);

    await user.click(elemnt1, operation, element2);
    expect(elemnt1).toBeInTheDocument();
    expect(operation).toBeInTheDocument();
    expect(element2).toBeInTheDocument();
  });

  test("Deve renderizar corretamente o resultado da operacao após clicar no =", async () => {
    const user = userEvent.setup();

    render(<Calculator />);

    screen.debug();
    const element1 = screen.getByRole("button", { name: /5/i });
    const operation = screen.getByRole("button", { name: /\*/i });
    const element2 = screen.getByText(/2/i);
    const equal = screen.getByText(/=/i);

    await user.click(element1);
    await user.click(operation);
    await user.click(element2);
    await user.click(equal);

    const result = screen.getByText("10");

    screen.logTestingPlaygroundURL();
    expect(result).toBeInTheDocument();
  });

  test("Deve concatenar as operações corretamente", async () => {
    const user = userEvent.setup();

    render(<Calculator />);

    const element1 = screen.getByRole("button", { name: /5/i });
    const operation = screen.getByRole("button", { name: /\*/i });
    const element2 = screen.getByText(/2/i);
    const operation2 = screen.getByText(/\+/i);
    const element3 = screen.getByRole("button", { name: /1/i });
    const element4 = screen.getByRole("button", { name: /0/i });
    const equal = screen.getByText(/=/i);

    screen.debug();
    await user.click(element1);
    await user.click(operation);
    await user.click(element2);
    await user.click(operation2);
    await user.click(element3);
    await user.click(element4);
    await user.click(equal);

    const result = screen.getByText("20");

    screen.logTestingPlaygroundURL();
    expect(result).toBeInTheDocument();
  });

  test("Deve retornar Infinity após dividir por 0, exceto 0/0.", async () => {
    const user = userEvent.setup();

    render(<Calculator />);

    const element1 = screen.getByRole("button", { name: /7/i });
    const operation = screen.getByRole("button", { name: /\//i });
    const element2 = screen.getByRole("button", { name: /0/i });
    const equal = screen.getByRole("button", { name: /=/i });

    await user.click(element1);
    await user.click(operation);
    await user.click(element2);
    await user.click(equal);

    const result = screen.getByText("Infinity");

    expect(result).toBeInTheDocument();
  });
});
