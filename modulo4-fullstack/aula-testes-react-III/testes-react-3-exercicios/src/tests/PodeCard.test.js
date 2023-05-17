import { render, screen, waitFor } from "@testing-library/react";
import axios from "axios";
import Pokecard from "../components/Pokecard";
import { axiosResponseMock } from "../tests/PokeMock";
import userEvent from "@testing-library/user-event";

jest.mock("axios");

const urlMock = "url-mock";
const openModalMock = jest.fn();

describe("Tests component PokeCard", () => {
  beforeEach(() => {
    axios.mockReset();
  });

  test("Render PokeCard", async () => {
    axios.get.mockResolvedValueOnce(axiosResponseMock);

    render(<Pokecard url={urlMock} openModal={openModalMock} />);

    await waitFor(() => {
      expect(
        screen.getByRole("heading", { name: /pokemon\-mock/i })
      ).toBeInTheDocument();
      expect(
        screen.getByRole("img", { name: /pokemon\-mock/i })
      ).toBeInTheDocument();
      expect(screen.getByText(/type1/i)).toBeInTheDocument();
      expect(screen.getByText(/type2/i)).toBeInTheDocument();
    });
  });

  test("Activate onClick openModal function", async () => {
    const user = userEvent.setup();
    axios.get.mockResolvedValueOnce(axiosResponseMock);

    render(<Pokecard url={urlMock} openModal={openModalMock} />);

    await waitFor(() => {});
    await user.click(screen.getByRole("article"));

    expect(openModalMock).toHaveBeenCalledTimes(1);
    expect(openModalMock).toBeCalledWith(axiosResponseMock.data);
    expect(openModalMock).toHaveReturned();
  });
});
