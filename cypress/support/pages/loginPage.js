import { loginPageSelectors } from "./loginPageElements";

export function doLogin(username, password){
    cy.get(loginPageSelectors.usernameTxtFld).type(username);
    cy.get(loginPageSelectors.passwordTxtFld).type(password);
    cy.get(loginPageSelectors.loginSubmitBtn).click();
    
}

export function validateLoginError(){
    cy.get(loginPageSelectors.loginErrorFld).should('have.text',"Epic sadface: Username and password do not match any user in this service");
}

