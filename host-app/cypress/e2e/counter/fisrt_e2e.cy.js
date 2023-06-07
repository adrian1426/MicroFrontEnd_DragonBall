describe("Counter tests", () => {
  it("Debe Cargar el couter", () => {
    cy.visit("http://localhost:3000/");
    cy.get("h1").contains("Counter App");

    cy.get("button").contains("+1");
  });
});