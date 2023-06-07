describe("Counter tests", () => {
  it("Debe Cargar el couter", () => {
    cy.visit("http://localhost:3000/");
    cy.get("h1").contains("Counter App");

    cy.get("button").contains("+1");
  });

  it("Debe Aumentar el counter", () => {
    cy.visit("http://localhost:3000/");

    cy.get("span").contains("20");
    const btnAdd = cy.get("button").contains("+1");
    btnAdd.click();

    cy.get("span").contains("21");
  });
});