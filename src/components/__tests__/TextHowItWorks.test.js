import { render, screen } from "@testing-library/react";

import HowItWorks from "../HowItWorks";

describe("When enter the homepage", () => {
  test("Should show the about section", () => {
    render(<HowItWorks />);

    const HowItWorksText = screen.getByText(/como funciona/i);

    expect(HowItWorksText).toBeInTheDocument;
  });
});
