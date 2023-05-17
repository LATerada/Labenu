import { render, waitFor, screen } from "@testing-library/react";
import axios from "axios";
import UserCard from "../components/UserCard";

jest.mock("axios");

const axiosResponseMock = {
  data: {
    firstName: "Violeta",
    lastName: "Tabbot",
    bank: {
      cardNumber: "3589640949470047",
      cardExpire: "10/23",
    },
  },
};

describe("Testes do componente UserCard", () => {
  beforeEach(() => {
    axios.mockReset();
  });

  test("Deve iniciar com Loading... e remover após o carregamento", async () => {
    axios.get.mockResolvedValueOnce(axiosResponseMock);

    render(<UserCard />);

    expect(screen.getByText("Loading...")).toBeInTheDocument();

    await waitFor(() => {});

    expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
  });

  test("Deve renderizar o nome, sobrenome, numero do cartao e data de validade", async () => {
    axios.get.mockResolvedValueOnce(axiosResponseMock);

    render(<UserCard />);

    expect(screen.queryByText("Violeta")).not.toBeInTheDocument();
    expect(screen.queryByText("Tabbot")).not.toBeInTheDocument();
    expect(screen.queryByText("3589640949470047")).not.toBeInTheDocument();
    expect(screen.queryByText("10/23")).not.toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText("Violeta Tabbot")).toBeInTheDocument();
      expect(screen.getByText("3589 6409 4947 0047")).toBeInTheDocument();
      expect(screen.getByText("10/23")).toBeInTheDocument();
    });
  });
});
