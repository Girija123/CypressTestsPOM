import { loginPageSelectors } from "./loginPageElements";

export function doLogin(username, password, expectedErrorMsg){
    cy.get(loginPageSelectors.usernameTxtFld).type(username);
    cy.get(loginPageSelectors.passwordTxtFld).type(password);
    cy.get(loginPageSelectors.loginSubmitBtn).click();
    cy.get(loginPageSelectors.loginValidationTxt).should('have.text',expectedErrorMsg);
}

