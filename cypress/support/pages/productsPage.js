/** @format */

import { productPageSelectors } from "./productsPageElements";
import {commonSelectors} from "./productsPageElements";

export function verifyProductPageLabel() {
  cy.get(commonSelectors.titleLabel).should(
    "have.text",
    "Products"
  );
}

export function addAllProductsToCart() {
  let noOfItems = Cypress.$(productPageSelectors.product).length;
  cy.get(productPageSelectors.product).each((product) => {
    cy.get(product)
      .within(() => {
        cy.get(productPageSelectors.addToCartBtn).click();
        cy.get(productPageSelectors.removeFromCartBtn)
          .should("have.text", "Remove")
          .should("be.visible");
      });
  });
  return noOfItems;
}
