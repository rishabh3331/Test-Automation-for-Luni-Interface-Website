class LoginPage {
    visit() {
      cy.visit('/login');
    }
  
    enterEmail(email) {
      cy.get('input[name="email"]').type(email);
    }
  
    enterPassword(password) {
      cy.get('input[name="password"]').type(password);
    }
  
    submit() {
      cy.get('button[type="submit"]').click();
    }
  
    verifyLoginSuccess() {
      cy.contains('Welcome').should('be.visible');
    }
  }
  
  export default new LoginPage();
  