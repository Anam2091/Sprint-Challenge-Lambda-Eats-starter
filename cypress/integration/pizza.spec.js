describe('My First Test', function () {
    it('Add text to box', function() {
        cy.visit('/pizza')
        cy.get('#abc').type('Hello, World')
    })
    it('Click toppings', function() {
        cy.visit('/pizza')
        cy.get('#cheeseid').click()
        cy.get('#mushid').click()
    })
    it('Click submit', function() {
        cy.visit('/pizza')
        cy.get('#buttid').click()

    })
})