describe("Test de personajes", () => {
  it("", () => {
    cy.visit("http://localhost:3000/");

    cy.get("a").contains("Personajes").click();

    let imagenes = 0;

    cy.get("img").each(item => imagenes += 1).then(() => cy.log(imagenes));
  });
});