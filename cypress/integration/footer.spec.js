describe('Footer',() => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.viewport(1920, 1080)
  })
  it('Footer should exist', () => {
    cy.get('[data-test=Footer]')
  })
  it('text should exist', () => {
    cy.get('[data-test=Footer] > p').should('have.text', 'igadanec.github.io/portfolio © Ines Gadanec | All rights reserved')
  })
})
