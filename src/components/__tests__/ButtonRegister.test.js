import { render, screen } from "@testing-library/react";

import FormClientRegister from "../FormClientRegister";

describe("When user click in the button for register", () => {
  test("Should send the user to his profile page", () => {
    render(<FormClientRegister />);
    const fromScreen = screen.getByText(/Cadastrar/i);
    expect(fromScreen).toBeInTheDocument;
  });
});
