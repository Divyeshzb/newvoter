describe('Result component', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('displays the correct heading', () => {
    cy.get('.heading').should('contain', 'Developers preference for building K8S cluster, as of');
  });

  it('displays the correct logo', () => {
    cy.get('.logo img').should('have.attr', 'src', 'kubernates.png');
  });

  it('displays the candidate cards', () => {
    cy.get('.card').should('have.length.gte', 1);
  });

  it('displays the candidate name and percentage of votes', () => {
    cy.get('.card').each(($card) => {
      cy.wrap($card).within(() => {
        cy.get('.cardContent').should('contain', 'candidate_name');
        cy.get('.progressbar_front').should('have.css', 'width').and('contain', '%');
      });
    });
  });
});