describe("Visitor views the current weeks schedule", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("is expected to display 7 days calendar", () => {
    cy.get("[data-cy=schedule]").children().should("have.length", 7);
  });
});
