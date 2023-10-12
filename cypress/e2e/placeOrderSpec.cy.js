/** @format */

import { doLogin } from "../support/pages/loginPage";
import {
  verifyProductPageLabel,
  addAllProductsToCart,
} from "../support/pages/productsPage";
import {
  navToCartPage,
  verifyNoOfItemsInCart,
  navToCheckout,
} from "../support/pages/cartPage";
import {
  enterDeliveryAddressAndContinue,
  submitOrder,
  verifyOrderSuccessMsg,
} from "../support/pages/checkoutPage";
describe("Place Order", () => {
  before(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  beforeEach("open Application", () => {
    cy.visit("/");
    cy.fixture("loginData").then((userdata) => {
      doLogin(
        userdata.validCredentials.username,
        userdata.validCredentials.password
      );
    });
  });

  it("verify user could place order successfully with multiple items", () => {
    verifyProductPageLabel();
    let noOfProducts = addAllProductsToCart();
    navToCartPage();
    verifyNoOfItemsInCart(noOfProducts);
    navToCheckout();
    cy.fixture("deliveryAddressData").then((addressdata) => {
      enterDeliveryAddressAndContinue(
        addressdata.validAddress.firstName,
        addressdata.validAddress.lastName,
        addressdata.validAddress.postcode
      );
    });
    submitOrder();
    verifyOrderSuccessMsg();
  });
});
