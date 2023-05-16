import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProductCard from "../components/ProductsList/ProductCard";

const productMock = {
  id: "55",
  title: "Mouse gamer",
  price: 150.0,
  image: "https://picsum.photos/400",
};

const addToCartMock = jest.fn();

describe("Teste do componente ProductCard", () => {
  test("Deve renderizar o Product Card", () => {
    render(<ProductCard product={productMock} addToCart={addToCartMock} />);

    const card = screen.getByRole("article");

    expect(card).toBeInTheDocument();
  });

  test("Deve renderizar a imagem, o título, o preço e o botão de comprar", () => {
    render(<ProductCard product={productMock} addToCart={addToCartMock} />);

    const image = screen.getByRole("img", { name: /mouse gamer/i });
    const title = screen.getByRole("heading", { name: /mouse gamer/i });
    const price = screen.getByText(/\$150\.00/i);
    const buttonBuy = screen.getByRole("button", { name: /buy/i });

    expect(image).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(price).toBeInTheDocument();
    expect(buttonBuy).toBeInTheDocument();
  });

  test("Deve adicionar produto no carrinho.", async () => {
    const user = userEvent.setup();

    render(<ProductCard product={productMock} addToCart={addToCartMock} />);

    const buttonBuy = screen.getByRole("button", { name: /buy/i });

    await user.click(buttonBuy);

    expect(buttonBuy).toBeInTheDocument();

    expect(addToCartMock).toHaveBeenCalled();
    expect(addToCartMock).toBeCalled();

    expect(addToCartMock).toBeCalledTimes(1);

    expect(addToCartMock).toBeCalledWith(productMock);
  });
});
