describe('My First Test', function() {
  it('Visit watti-nuxt-sample', function() {
    cy.visit('https://watti-nuxt-sample.netlify.app/')
    cy.title().should('eq', 'Sample Image')
  })
})