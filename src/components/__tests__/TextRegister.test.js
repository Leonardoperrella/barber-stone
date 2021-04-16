import { render, screen } from "@testing-library/react";

import RegisterSectionHomepage from "../RegisterSectionHomepage";

describe("When enter the homepage", () => {
  test("Should show the about section", () => {
    render(<RegisterSectionHomepage />);

    const RegisterText = screen.getByText(/cadastre-se/i);

    expect(RegisterText).toBeInTheDocument;
  });
});
