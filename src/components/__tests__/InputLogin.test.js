import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FormLogin from "../FormLogin";

describe("When user add a text in the input", () => {
  test("Should put his correct information in the input", () => {
    render(<FormLogin />);

    const input = userEvent.type(screen.getByRole("textbox"), "Ronaldo");
    const button = userEvent.click(screen.getByRole("button"));

    expect(input).toBeInTheDocument;
    expect(button).toBeInTheDocument;
  });
});
