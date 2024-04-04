const { defineConfig } = require("cypress");
//defaultCommandTimeout: 2000,

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  numTestsKeptInMemory: 50,

  experimentalSessionAndOrigin:true,
  //retries: 2,
  reporterOptions: {
    reportFilename :"Mocha Report",
    charts: true,
    reportPageTitle: 'Mocha Awesome Report -Test Suite',
    embeddedScreenshots: true,
    reportDir: "cypress/results",
    videoOnFailOnly: true,
    code: false,
    inlineAssets: true,
    saveAllAttempts: false,
    autoOpen: true,
    overwrite: false
  },

  e2e: {
   
    experimentalStudio: true,

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
