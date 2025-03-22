const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://luni-interface-029.vercel.app/",
  
    viewportWidth: 1280,
    viewportHeight: 720,
    chromeWebSecurity: false
  }
});