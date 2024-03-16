const { defineConfig } = require("cypress");
//defaultCommandTimeout: 2000,

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Mocha Awesome Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    autoOpen: true,
    overwrite: false
  },

  e2e: {
    "baseUrl": "https://opensource-demo.orangehrmlive.com",

    setupNodeEvents(on, config) {


      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
      //Launch Chrome browser in incognito mode
      // on("before:browser:launch", (browser={}, launchOptions) => {
      //   if (browser.family === 'chromium' && browser.name !== "electron") {
      //     launchOptions.args.push("--incognito");

      //   }
      //   return launchOptions
      // }); 
    },
  },

  // viewportHeight:800,
  // viewportWidth:540

});
