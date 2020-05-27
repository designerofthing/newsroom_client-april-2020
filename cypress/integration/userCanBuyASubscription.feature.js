describe('User can purchase a subscription', () => {
  beforeEach(() => {
		cy.server()
		cy.route({
			method: "POST",
			url: "**/subscriptions",
      response: { message: "Transaction was successful" }
    })
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/articles",
      response: "fixture:article_list.json",
    });
    cy.visit("/")
  })
    // cy.route({
    //   method: "POST",
    //   url: "http://localhost:3000/api/auth/*",
    //   response: "fixture:successful_login.json",
    //   headers: {
    //     uid:"user@mail.com"
    //   }
    // })
    // cy.route({
    //   method: "GET",
    //   url: "http://localhost:3000/api/auth/*",
    //   response: "fixture:successful_login.json",
    //   headers: {
    //     uid:"user@mail.com"
    //   }
    // })
    // cy.get('#login-link').click()
    // cy.get('#login-form').within(() => {
    //   cy.get('#email').type('user@mail.com');
    //   cy.get('#password').type('password');
    //   cy.get('Button').contains('Submit').click();
    // });
    

  it('by clicking "Subscribe" button and making transaction', () => {
    cy.get('#subscription-link').contains('Subscribe').click()
    cy.get('#payment-interface').should('be.visible')
    cy.wait(1000)
    cy.typeInStripeElement("cardnumber", "4242424242424242")
    cy.typeInStripeElement("exp-date", "12/21")
    cy.typeInStripeElement("cvc", "717")
    cy.get('button').contains('Submit').click()
    cy.get('#transaction-message')
      .should(
        'contain', 
        'Transaction was successful'
      )
    cy.wait(2000)
    cy.get('#transaction-message')
      .should(
        'not.be.visible'
      )
    cy.get('#subscriber-message')
      .should(
        'contain',
        'You are a subscriber!'
      )
  })
}) 