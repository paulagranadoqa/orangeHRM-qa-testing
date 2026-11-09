const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    video: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    baseUrl: 'https://opensource-demo.orangehrmlive.com/web/index.php',
  },
});
