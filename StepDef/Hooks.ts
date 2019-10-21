import { Before, After, Status, BeforeAll } from "cucumber";
import { browser } from "protractor";
import { async } from "q";


Before(async function(){
  browser.waitForAngularEnabled(false);
 await browser.manage().window().maximize();
})


After(async function(scenario) {
    if (scenario.result.status === Status.PASSED) {
      const attach = this.attach; // cucumber's world object has attach function which should be used
      return await browser.takeScreenshot().then(async function(png) {
        const decodedImage = new Buffer(png, "base64");
        return await attach(decodedImage, "image/png");
      });
    }
    else if (scenario.result.status === Status.FAILED) {
        const attach = this.attach; // cucumber's world object has attach function which should be used
        return await browser.takeScreenshot().then(async function(png) {
          const decodedImage = new Buffer(png, "base64");
          return await attach(decodedImage, "image/png");
        });
      }
  });

