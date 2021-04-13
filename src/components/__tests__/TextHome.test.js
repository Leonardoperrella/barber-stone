import { render, screen } from "@testing-library/react";

import About from "../About";

describe("When enter the homepage", () => {
  test("Should show the about section", () => {
    render(<About />);

    const AboutText = screen.getByText(/sobre/i);

    expect(AboutText).toBeInTheDocument;
  });
});
