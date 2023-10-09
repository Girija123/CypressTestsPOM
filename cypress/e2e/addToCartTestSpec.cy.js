/** @format */

import {
  chooseProductsAndAddToCart,
  navToCart,
} from "../support/pages/homePage";
import {
  assertNumberOfItemsInCart,
  findLowPriceItemInCart,
  removeLowPriceItemInCart
} from "../support/pages/cartPage";


describe('Login Tests', () => {

  let minPrice, lowestPrice;


before(()=>{
  cy.clearCookies();
  cy.clearLocalStorage();
  })

 beforeEach(()=>{
  cy.visit("/");
 }) 

 it('Verify add mulitple items to Cart', () =>{

  chooseProductsAndAddToCart();
  navToCart();
  assertNumberOfItemsInCart(4);
}) 

  /*Scenario: Verify lowest priced item can be removed from the cart
  Given I add four random items to my cart
  When I view my cart
  Then I find total four items listed in my cart
  When I search for lowest price item
  And I am able to remove the lowest price item from my cart
  Then I am able to verify three items in my cart */

it('Verify remove lowest priced item from four items of cart', () =>{

  chooseProductsAndAddToCart();
  navToCart();
  assertNumberOfItemsInCart(4);
  lowestPrice=findLowPriceItemInCart();
  minPrice=lowestPrice;
  removeLowPriceItemInCart(minPrice);
  assertNumberOfItemsInCart(3);

}) 

})




