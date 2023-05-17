import { render, screen, waitFor } from "@testing-library/react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

jest.mock("axios");

const axiosResponseMock = {
  data: {
    id: "id-mock",
    title: "title-mock",
    description: "description-mock",
    price: 1000,
    thumbnail: "https://i.dummyjson.com/data/products/6/thumbnail.png",
  },
};

describe("Testes do componente ProductCard", () => {
  beforeEach(() => {
    axios.mockReset();
  });

  test("Deve Renderizar o ProductCard", async () => {
    // chamada do axios
    axios.get.mockResolvedValueOnce(axiosResponseMock);

    // renderizacao do componente
    render(<ProductCard />);

    // expects da primeira renderizacao
    expect(screen.getByText("Loading...")).toBeInTheDocument();

    screen.logTestingPlaygroundURL();
    screen.debug();

    await waitFor(() => {
      // expects que necessitam algum carregamento
      expect(screen.getByText("title-mock")).toBeInTheDocument();
    });

    // // também podemos abreviar expects sem o waitFor através do findBy
    expect(await screen.findByText("description-mock")).toBeInTheDocument();

    screen.logTestingPlaygroundURL();
    screen.debug();
  });

  test("Deve renderizar o Loading... ", async () => {
    axios.get.mockResolvedValueOnce(axiosResponseMock);

    render(<ProductCard />);

    expect(screen.getByText("Loading...")).toBeInTheDocument();
    expect(screen.queryByText("title-mock")).not.toBeInTheDocument();

    screen.logTestingPlaygroundURL();
    screen.debug();

    await waitFor(() => {});
  });

  test("Deve renderizar title, description, price e a image", async () => {
    axios.get.mockResolvedValueOnce(axiosResponseMock);

    render(<ProductCard />);

    await waitFor(() => {
      expect(screen.getByText("title-mock")).toBeInTheDocument();
    });

    expect(screen.queryByText("Loading...")).not.toBeInTheDocument();

    screen.debug();
    screen.logTestingPlaygroundURL();
  });
});
