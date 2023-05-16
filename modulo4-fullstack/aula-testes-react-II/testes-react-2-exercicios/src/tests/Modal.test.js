import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Modal from "../components/Modal";

const activeModalMock = {
  sprites: {
    front_default:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
  },
  id: 2,
  name: "ivysaur",
  types: [{ type: { name: "grass" } }, { type: { name: "poison" } }],
  weight: 130,
  height: 100,
};

const closeModalMock = jest.fn();

describe("Teste do componente Modal", () => {
  test("Deve renderizar o modal", () => {
    render(<Modal activeModal={activeModalMock} closeModal={closeModalMock} />);
  });

  test("Deve renderizar imagem, id, nome, tipos, peso e altura", () => {
    render(<Modal activeModal={activeModalMock} closeModal={closeModalMock} />);

    screen.logTestingPlaygroundURL();
    const image = screen.getByRole("img", { name: /ivysaur/i });
    const id = screen.getByText(/#2/i);
    const name = screen.getByText(/ivysaur/i);
    const type1 = screen.getByText(/grass/i);
    const type2 = screen.getByText(/poison/i);
    const weightTitle = screen.getByRole("heading", { name: /weight/i });
    const weight = screen.getByText(/13\.0 kg/i);
    const heightTitle = screen.getByRole("heading", { name: /height/i });
    const height = screen.getByText(/10\.0 m/i);
    const closeButton = screen.getByRole("button", { name: /❌/i });

    expect(image).toBeInTheDocument();
    expect(id).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(type1).toBeInTheDocument();
    expect(type2).toBeInTheDocument();
    expect(weightTitle).toBeInTheDocument();
    expect(weight).toBeInTheDocument();
    expect(heightTitle).toBeInTheDocument();
    expect(height).toBeInTheDocument();
    expect(closeButton).toBeInTheDocument();
  });

  test("Deve executar a funcao closeModal ao clicar no botao de fechar", async () => {
    const user = userEvent.setup();

    render(<Modal activeModal={activeModalMock} closeModal={closeModalMock} />);

    const closeButton = screen.getByRole("button", { name: /❌/i });

    await user.click(closeButton);

    expect(closeModalMock).toBeCalled();
  });
});
