context("Login page", () => {
  it("Verify the form in the page", () => {
    cy.visit("http://localhost:3000/");
    cy.get(":nth-child(1) > .sc-crHlIS").type("anderzim@gmail.com");
    cy.get(":nth-child(2) > .sc-crHlIS").type("12345678");
    cy.get(".sc-ksdxAp").click();
  });
});
