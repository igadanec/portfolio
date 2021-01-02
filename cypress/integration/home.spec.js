describe('Home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.viewport(1920, 1080)
  })
  context('First section', () => {
    it('first section should exist', () => {
      cy.get('[data-test=firstSection]')
    })
    it('text should exist', () => {
      cy.get('[data-test=firstSection] > .container__inner > .header-text > .paragraph').should('have.text', 'INES GADANEC')
      cy.get('[data-test=firstSection] > .container__inner > .header-text > .title').should('have.text', 'FRONTEND DEVELOPER')
    })
    it('image should exist', () => {
      cy.get('[data-test=firstSection] > .container__inner > .image ')
    })
  })
  context('Second section', () => {
    it('second section should exist', () => {
      cy.get('[data-test=secondSection]')
    })
    it('content should exist', () => {
      cy.get('[data-test=secondSection] > .container__inner > .container__inner-left > .avatar ')
      cy.get('[data-test=secondSection] > .container__inner > .container__inner-right > .text-box > .title').should('have.text', 'About me')
      cy.get('[data-test=secondSection] > .container__inner > .container__inner-right > .text-box > .paragraph')
    })
  })
    context('Third section', () => {
      it('third section should exist', () => {
        cy.get('[data-test=thirdSection]')
      })
      it('content should exist', () => {
        cy.get('[data-test=thirdSection] > .container__inner > .title').should('have.text', "THINGS THAT I'M FAMILIAR WITH")
        cy.get('[data-test=thirdSection] > .container__inner > .grid-container > .grid-container__left > .title').should('have.text', 'Frontend')
        cy.get('[data-test=thirdSection] > .container__inner > .grid-container > .grid-container__right > .title').should('have.text', 'Tools')
        cy.get('[data-test=thirdSection] > .container__inner > .grid-container > .grid-container__right > .title').should('have.text', 'Tools')
        cy.get('[data-test=thirdSection] > .container__inner > .grid-container > .grid-container__left > .grid-items > .grid-items__inner > .item > img')
        cy.get('[data-test=thirdSection] > .container__inner > .grid-container > .grid-container__left > .grid-items > .grid-items__inner > .item > p')
        cy.get('[data-test=thirdSection] > .container__inner > .grid-container > .grid-container__right > .grid-items > .grid-items__inner > .item > img')
        cy.get('[data-test=thirdSection] > .container__inner > .grid-container > .grid-container__right > .grid-items > .grid-items__inner > .item > p')
      })
    })
      context('Forth seciton',() => {
        it('forth section should exist',() => {
          cy.get('[data-test=forthSection]')
        })
        it('content should exist',() => {
          cy.get('[data-test=forthSection] > .container__inner > .title').should('have.text', 'RECENT WORK')
          cy.url().should('eq', 'http://localhost:3000/')
          cy.get('[data-test=forthSection] > .container__inner > .work-grid > .work-grid__item > img')
          cy.get('[data-test=forthSection] > .container__inner > .work-grid > .work-grid__item > p').should('have.text', 'PORTFOLIO')
        })
      })
  context('Fifth seciton',() => {
    it('fifth section should exist',() => {
      cy.get('[data-test=fifthSection]')
    })
    it('content should exist', () => {
      cy.get('[data-test=fifthSection] > .container__inner > .title').should('have.text','CONTACT ME')
      cy.get('[data-test=fifthSection] > .container__inner > .form-container > label').should('have.text', 'SubjectMessage')
      cy.get('[data-test=fifthSection] > .container__inner > .form-container > input').type('Type subject')
      cy.get('[data-test=fifthSection] > .container__inner > .form-container > textarea').type('Type message')
      cy.get('[data-test=fifthSection] > .container__inner > .form-container > button').click()
    })
  })
})
