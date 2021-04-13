context("Register client page", () => {
  it("Verify the form in the page", () => {
    cy.visit("http://localhost:3000/cadastro-cliente");
    cy.get(":nth-child(1) > .sc-crHlIS").type("André Luiz");
    cy.get(":nth-child(2) > .sc-crHlIS").type("Vieira");
    cy.get(":nth-child(3) > .sc-crHlIS").type("anderzim@gmail.com");
    cy.get(":nth-child(4) > .sc-crHlIS").type("12345678");
    cy.get(".sc-ksdxAp").click();
  });
});
