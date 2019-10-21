"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
cucumber_1.Before(function () {
    return __awaiter(this, void 0, void 0, function* () {
        protractor_1.browser.waitForAngularEnabled(false);
        yield protractor_1.browser.manage().window().maximize();
    });
});
cucumber_1.After(function (scenario) {
    return __awaiter(this, void 0, void 0, function* () {
        if (scenario.result.status === cucumber_1.Status.PASSED) {
            const attach = this.attach; // cucumber's world object has attach function which should be used
            return yield protractor_1.browser.takeScreenshot().then(function (png) {
                return __awaiter(this, void 0, void 0, function* () {
                    const decodedImage = new Buffer(png, "base64");
                    return yield attach(decodedImage, "image/png");
                });
            });
        }
        else if (scenario.result.status === cucumber_1.Status.FAILED) {
            const attach = this.attach; // cucumber's world object has attach function which should be used
            return yield protractor_1.browser.takeScreenshot().then(function (png) {
                return __awaiter(this, void 0, void 0, function* () {
                    const decodedImage = new Buffer(png, "base64");
                    return yield attach(decodedImage, "image/png");
                });
            });
        }
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSG9va3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9TdGVwRGVmL0hvb2tzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsdUNBQTREO0FBQzVELDJDQUFxQztBQUlyQyxpQkFBTSxDQUFDOztRQUNMLG9CQUFPLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEMsTUFBTSxvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzVDLENBQUM7Q0FBQSxDQUFDLENBQUE7QUFHRixnQkFBSyxDQUFDLFVBQWUsUUFBUTs7UUFDekIsSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sS0FBSyxpQkFBTSxDQUFDLE1BQU0sRUFBRTtZQUM1QyxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsbUVBQW1FO1lBQy9GLE9BQU8sTUFBTSxvQkFBTyxDQUFDLGNBQWMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFlLEdBQUc7O29CQUMzRCxNQUFNLFlBQVksR0FBRyxJQUFJLE1BQU0sQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUM7b0JBQy9DLE9BQU8sTUFBTSxNQUFNLENBQUMsWUFBWSxFQUFFLFdBQVcsQ0FBQyxDQUFDO2dCQUNqRCxDQUFDO2FBQUEsQ0FBQyxDQUFDO1NBQ0o7YUFDSSxJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxLQUFLLGlCQUFNLENBQUMsTUFBTSxFQUFFO1lBQy9DLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxtRUFBbUU7WUFDL0YsT0FBTyxNQUFNLG9CQUFPLENBQUMsY0FBYyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQWUsR0FBRzs7b0JBQzNELE1BQU0sWUFBWSxHQUFHLElBQUksTUFBTSxDQUFDLEdBQUcsRUFBRSxRQUFRLENBQUMsQ0FBQztvQkFDL0MsT0FBTyxNQUFNLE1BQU0sQ0FBQyxZQUFZLEVBQUUsV0FBVyxDQUFDLENBQUM7Z0JBQ2pELENBQUM7YUFBQSxDQUFDLENBQUM7U0FDSjtJQUNMLENBQUM7Q0FBQSxDQUFDLENBQUMifQ==