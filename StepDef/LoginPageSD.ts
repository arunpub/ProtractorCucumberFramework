import { Given } from "cucumber";
import {LoginPage} from "../UiActions/LoginPage"
//let loginPage=new LoginPage

Given('Iam login tom the Application', async function () {
    await LoginPage.getUrl();
  });
