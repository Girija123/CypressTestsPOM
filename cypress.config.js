const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  video: false,
  chromeWebSecurity: true,
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports",
    reportFilename: "report",
    overwrite: true,
    html: true,
    json: true,
    charts: true
  },
  e2e: {
    baseUrl: 'https://cms.demo.katalon.com/',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
