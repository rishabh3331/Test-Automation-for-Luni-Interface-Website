class HomePage {
    visit() {
      cy.visit('https://luni-interface-029.vercel.app/');
    }
  
    getNavigationLink(label) {
      return cy.contains('a', label);
    }
  
    clickNavigationLink(label) {
      this.getNavigationLink(label).click();
    }
  }
  
  export default new HomePage();