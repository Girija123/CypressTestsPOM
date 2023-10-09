/** @format */

import {
  clickMyAccountLink,
} from "../support/pages/homePage";
import {
doLogin
} from "../support/pages/loginPage";

describe('Login Tests', () => {

let userdata;

before(()=>{
  cy.clearCookies();
  cy.clearLocalStorage();
  cy.fixture('loginData').then((data)=>{
    userdata = data;
  })
})

beforeEach('open Application', () => {
      cy.visit("/");
})

it('verify login with valid credentials', () =>{
  
  cy.fixture('loginData').then((data)=>{
    clickMyAccountLink();
    doLogin(userdata.username, userdata.password, userdata.expectedLoginErrorMsg)
   })
 
}) 

})