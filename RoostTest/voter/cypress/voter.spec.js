

describe('ROOST_SVC_URL', () => {
  it('Visits the ROOST_SVC_URL and checks the title and background color', () => {
    cy.visit(Cypress.env('ROOST_SVC_URL'))
    cy.title().should('include', 'Roost')
    cy.get('body').should('have.css', 'background-color', 'white')
  })
})