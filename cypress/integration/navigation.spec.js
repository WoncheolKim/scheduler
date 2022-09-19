describe("Navigation", () => {
  it("should visit root", () => {
    cy.visit("/");
  });
  it("Shoud navigate Tuesday", () => {
    cy.contains('Tuesday') 
      .click()
  });
  it("Should click the plus2 button", () => {
    cy.get(':nth-child(2) > .appointment__add > .appointment__add-button')
      .click()      
  });
  it("Shold click the cancel button", () => {
    cy.get('.button--danger')
      .click()
  });
  it("Shold click the cancel button", () => {
    cy.get("li")
    .contains("Tuesday")
    .should("have.css", "background-color", "rgba(0, 0, 0, 0)");
  });
  it("Shold click the Monday button", () => {
    cy.get("li")
      .contains("Monday") 
      .click()
  });

  it("should book an interview", () => {
    cy.get("[alt=Add]").first().click()
    .get("[data-testid=student-name-input]").type("Lydia Miller-Jones")
    .get('[alt="Sylvia Palmer"]').click()
    .contains("Save").click()
    .contains(".appointment__card--show", "Lydia Miller-Jones")
    .contains(".appointment__card--show", "Sylvia Palmer")
  });

  it("should edit an interview", () => {
    cy.get("[alt=Edit]").first().click({ force: true })
    .get("[data-testid=student-name-input]")
      .clear()
      .type("Lydia Miller-Jones")
    .get("[alt='Tori Malcolm']").click()
    .contains("Save").click()
    .contains(".appointment__card--show", "Lydia Miller-Jones")
    .contains(".appointment__card--show", "Tori Malcolm")
  });
  
  it("should cancel an interview", () => {
    cy.get("[alt=Delete]").click({ force: true })
    .contains("Confirm").click()
    .contains("DELETE").should("exist")
    .contains("DELETE").should("not.exist")
    .contains(".appointment__card--show", "Archie Cohen").should("not.exist")
  });

  it("Shold hover over the card", () => {
    cy.get('[data-testid="student-name-input"]').clear();
  });

  it("Shold hover over the card", () => {
    cy.get('[data-testid="student-name-input"]').type("abcd");
  });
}); 
