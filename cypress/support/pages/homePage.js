import { homePageSelectors } from "./homePageElements";
import { cartPageSelectors } from "./cartPageElements";
import { loginPageSelectors } from "./loginPageElements";

export function chooseProductsAndAddToCart() {
  for (let i = 0; i < 4; i++) {
    cy.get(homePageSelectors.products)
      .eq(i)
      .realHover()
      .within((product) => {
        cy.xpath('//a[text()="Add to cart"]').eq(i).click();
      });
  }
}

export function navToCart(){
    cy.get(homePageSelectors.menu).contains('Cart').click();
    cy.get(cartPageSelectors.cartPageTitle).should('have.text',"Cart");
}

export function clickMyAccountLink()
{
    cy.get(homePageSelectors.myAccountLink).contains('My account').click();
    cy.get(loginPageSelectors.myAccountPageTitle).should('have.text', 'My account');
}
