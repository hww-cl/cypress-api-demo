const { defineConfig } = require("cypress");

module.exports = defineConfig({
 
  e2e: {
    baseUrl: "https://petstore.swagger.io/v2/",
    setupNodeEvents() {
      // implement node event listeners here
    },
   
    video:false,
    retries:{
      runMode:1,
      openMode:2
    }
  },
});
