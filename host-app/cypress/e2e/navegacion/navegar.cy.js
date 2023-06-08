describe("Test de Navegacions", () => {
  it("Debe visitar todas la opciones de menú", () => {
    cy.visit("http://localhost:3000/");

    cy.get("a").contains("Personajes").click();
    cy.get("a").contains("About").click();
    cy.get("a").contains("Home").click();
  });

  it("Debe visitar la pagina de detalles de un personaje", () => {
    cy.visit("http://localhost:3000/");

    cy.get("a").contains("Personajes").click();

    cy.visit("http://localhost:3000/personajes/2");
  });
});