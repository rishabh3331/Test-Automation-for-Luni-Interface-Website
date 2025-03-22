class CartPage {
    openCart() {
      cy.get('.cart-icon').click();
    }
  
    clickCheckout() {
      cy.contains('Checkout').click();
    }
  }
  
  export default new CartPage();
  
  