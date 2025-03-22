import HomePage from '../support/pageObjects/HomePage';

describe('Homepage Navigation Tests', () => {
  beforeEach(() => {
    HomePage.visit();
   
  });

  it('Validates Header Navigation Links', () => {
    HomePage.clickNavigationLink('About Us');
    cy.url().should('include', '/about');


    HomePage.clickNavigationLink('Contact');
    cy.url().should('include', '/contact');
  });
});
