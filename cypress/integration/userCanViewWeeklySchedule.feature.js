describe("Visitor views the current weeks schedule", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("is expected to display 7 days calendar", () => {
    cy.get("th").should("have.length", 9);
  });
});
