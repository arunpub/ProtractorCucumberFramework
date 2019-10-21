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
const LoginPage_1 = require("../UiActions/LoginPage");
//let loginPage=new LoginPage
cucumber_1.Given('Iam login tom the Application', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield LoginPage_1.LoginPage.getUrl();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9naW5QYWdlU0QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9TdGVwRGVmL0xvZ2luUGFnZVNELnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsdUNBQWlDO0FBQ2pDLHNEQUFnRDtBQUNoRCw2QkFBNkI7QUFFN0IsZ0JBQUssQ0FBQywrQkFBK0IsRUFBRTs7UUFDbkMsTUFBTSxxQkFBUyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQzNCLENBQUM7Q0FBQSxDQUFDLENBQUMifQ==