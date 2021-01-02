describe('Navigation bar', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })
  context('desktop navigation', () => {
    beforeEach(() => {
      cy.viewport(1920, 1080)
    })
    it('Navigation should exist', () => {
      cy.get('[data-test=navigationBar]')
    })
    it('Logo should exist', () => {
      cy.get('[data-test=navbarLogo]')
    })
    it('Links should exist', () => {
      cy.get('[data-test=navigationBar] > .navbar-container__inner > .navbar-right > ul > li:nth-child(1) > .link').should('have.text', 'Home')
      cy.get('[data-test=navigationBar] > .navbar-container__inner > .navbar-right > ul > li:nth-child(2) > .link').should('have.text', 'About me')
      cy.get('[data-test=navigationBar] > .navbar-container__inner > .navbar-right > ul > li:nth-child(3) > .link').should('have.text', 'Recent work')
      cy.get('[data-test=navigationBar] > .navbar-container__inner > .navbar-right > ul > li:nth-child(4) > .button-link').should('have.text', 'Contact')
    })
    it('Click on link should scroll to section', () => {
      cy.get('[data-test=navigationBar] > .navbar-container__inner > .navbar-right > ul > li:nth-child(2) > .link').click()
      cy.wait(1000)
      cy.get('[data-test=navigationBar] > .navbar-container__inner > .navbar-right > ul > li:nth-child(3) > .link').click()
      cy.wait(1000)
      cy.get('[data-test=navigationBar] > .navbar-container__inner > .navbar-right > ul > li:nth-child(4) > .button-link').click()
      cy.wait(1000)
      cy.get('[data-test=navigationBar] > .navbar-container__inner > .navbar-right > ul > li:nth-child(1) > .link').click()
    })
  })
  context('mobile navigation', () => {
    beforeEach(() => {
      cy.viewport(1023, 1080)
      cy.get('[data-test=navigationBar] > .navbar-container__inner > .hamburger').click()
    })
    it('Links should exist', () => {
      cy.get('[data-test=responsiveNavbar] > .responsive-navbar__inner > ul > li:nth-child(1) > .link').should('have.text', 'Home')
      cy.get('[data-test=responsiveNavbar] > .responsive-navbar__inner > ul > li:nth-child(2) > .link').should('have.text', 'About me')
      cy.get('[data-test=responsiveNavbar] > .responsive-navbar__inner > ul > li:nth-child(3) > .link').should('have.text', 'Recent work')
      cy.get('[data-test=responsiveNavbar] > .responsive-navbar__inner > ul > li:nth-child(4) > .link').should('have.text', 'Contact')
    })
    it('Click on link should scroll to section', () => {
      cy.get('[data-test=responsiveNavbar] > .responsive-navbar__inner > ul > li:nth-child(2) > .link').click()
      cy.wait(1000)
      cy.get('[data-test=navigationBar] > .navbar-container__inner > .hamburger').click()
      cy.wait(1000)
      cy.get('[data-test=responsiveNavbar] > .responsive-navbar__inner > ul > li:nth-child(3) > .link').click()
      cy.wait(1000)
      cy.get('[data-test=navigationBar] > .navbar-container__inner > .hamburger').click()
      cy.wait(1000)
      cy.get('[data-test=responsiveNavbar] > .responsive-navbar__inner > ul > li:nth-child(4) > .link').click()
      cy.wait(1000)
      cy.get('[data-test=navigationBar] > .navbar-container__inner > .hamburger').click()
      cy.wait(1000)
      cy.get('[data-test=responsiveNavbar] > .responsive-navbar__inner > ul > li:nth-child(1) > .link').click()
    })
  })
})
