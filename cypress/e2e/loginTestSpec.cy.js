import { doLogin } from "../support/pages/loginPage";
import { verifyProductPageLabel } from "../support/pages/productsPage";
describe("Place order", () => {
  before(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  beforeEach("open Application", () => {
    cy.visit("/");
  });

  it("verify login with valid credentials", () => {
    cy.fixture("loginData").then((userdata) => {
      doLogin(
        userdata.validCredentials.username,
        userdata.validCredentials.password
      );
    });
    verifyProductPageLabel();
  });
  it("verify by logging in with invalid credentials expected error message is displayed", () => {
    cy.fixture("loginData").then((userdata) => {
      doLogin(
        userdata.invalidCredentials.username,
        userdata.invalidCredentials.password
      );
    });
  });
});