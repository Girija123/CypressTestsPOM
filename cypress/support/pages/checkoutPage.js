import {checkoutPageSelectors} from './checkoutPageElements';
import {commonSelectors} from "./productsPageElements";

export function enterDeliveryAddressAndContinue(firstName,lastName,postcode){
 cy.get(checkoutPageSelectors.firstNameTxtFld).type(firstName);
 cy.get(checkoutPageSelectors.lastNameTxtFld).type(lastName);
 cy.get(checkoutPageSelectors.postCodeTxtFld).type(postcode);
 cy.get(checkoutPageSelectors.submitBtn).contains('Continue').click();
 cy.get(commonSelectors.titleLabel).contains('Checkout: Overview');
}

export function submitOrder(){
  cy.get(checkoutPageSelectors.finishBtn).contains('Finish').click();  
}

export function verifyOrderSuccessMsg(){
 cy.get(checkoutPageSelectors.successMsgHeader).should('have.text',"Thank you for your order!");
 cy.get(checkoutPageSelectors.successMsgText).should('have.text',"Your order has been dispatched, and will arrive just as fast as the pony can get there!");
}
