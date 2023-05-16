import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CartCard from "../components/Cart/CartCard";

const productMock = {
  id: "55",
  title: "Mouse gamer",
  price: 150.0,
  quantity: 1,
  image: "https://picsum.photos/400",
};

const removeFromCartMock = jest.fn();

describe("Testes do componente CartCard", () => {
  test("Deve renderizar a imagem, o título, o preço e o botão de comprar", () => {
    render(
      <CartCard product={productMock} removeFromCart={removeFromCartMock} />
    );
    screen.logTestingPlaygroundURL();

    const image = screen.getByRole("img", { name: /mouse gamer/i });
    const title = screen.getByRole("heading", { name: /mouse gamer/i });
    const price = screen.getByText(/\$150\.00/i);
    const quantity = screen.getByText(/x/i);
    const buttonRemove = screen.getByRole("button", { name: /remove/i });

    expect(image).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(price).toBeInTheDocument();
    expect(quantity).toBeInTheDocument();
    expect(buttonRemove).toBeInTheDocument();
  });

  test("Deve remover o item quando o botao remove for clicado", async () => {
    const user = userEvent.setup();

    render(
      <CartCard product={productMock} removeFromCart={removeFromCartMock} />
    );
    const buttonRemove = screen.getByRole("button", { name: /remove/i });

    await user.click(buttonRemove);

    expect(removeFromCartMock).toHaveBeenCalled();
  });
});
