describe("My First Test", () => {
  it('Clicking "type" naviagtes tp a new URL', () => {
    cy.visit("https://example.cypress.io");

    cy.contains("type").click();

    //should be on a new URL which includes '/commands/actions'
    cy.url().should("include", "/commands/actions");

    //Get an input, type into it and verify that the value has been updated
    cy.get(".action-email")
      .type("fake@email.com")
      .should("have.value", "fake@email.com");
  });
});
