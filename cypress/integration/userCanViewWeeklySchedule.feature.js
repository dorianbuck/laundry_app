describe("Visitor views the current weeks schedule", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("is expected to display 7 days calendar", () => {
    cy.get("th").should("have.length", 9);
  });

  it("is expected to display the possible laundry timeslots", () => {
    cy.get("data-cy=timeslots").should("have.length", 20);
  });
});
