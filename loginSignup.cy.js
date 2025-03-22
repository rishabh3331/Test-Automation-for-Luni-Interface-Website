import LoginPage from '../support/pageObjects/LoginPage';

describe('User Authentication Tests', () => {
  beforeEach(() => {
    LoginPage.visit();
  });

  it('Login with Valid Credentials', () => {
    LoginPage.enterEmail('testuser@example.com');
    LoginPage.enterPassword('Test@123');
    LoginPage.submit();
    LoginPage.verifyLoginSuccess();
            
  });

  it('Login with Invalid Credentials', () => {
    LoginPage.enterEmail('wrong@example.com');
    LoginPage.enterPassword('wrongpass');
    LoginPage.submit();
    cy.contains('Invalid credentials').should('be.visible');
  });
});
