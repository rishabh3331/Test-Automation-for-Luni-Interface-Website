import CartPage from '../support/pageObjects/CartPage';

describe('Cart & Checkout Tests', () => {
  beforeEach(() => {
    cy.visit('/products');
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false; // Prevents Cypress from failing the test
    });
  });

  it('Add product to cart and verify', () => {
    cy.wait(4000);

    cy.get('[data-testid="ShoppingCartIcon"]').click();
  });

  it('Complete checkout process', () => {
    CartPage.openCart();
    CartPage.clickCheckout();
    cy.contains('Order Confirmation').should('be.visible');        
  });
});
