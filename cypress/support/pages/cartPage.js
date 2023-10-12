/** @format */

import { cartPageSelectors } from "./cartPageElements";
import {commonSelectors} from "./productsPageElements";

export function navToCartPage(){
  cy.get(cartPageSelectors.cartContainer).click();
  cy.get(commonSelectors.titleLabel).should('have.text',"Your Cart");
}

export function verifyNoOfItemsInCart(noOfItems){
  cy.get(cartPageSelectors.cartItemSection).then((items)=>{
    let itemsLength=items.length;
    expect(itemsLength).to.equal(noOfItems);
  });
}

export function navToCheckout(){
  cy.get(cartPageSelectors.checkoutBtn).contains('Checkout').click();
  cy.get(commonSelectors.titleLabel).should('have.text',"Checkout: Your Information");
}