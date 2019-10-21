import { browser } from "protractor";

export class LoginPage
{
   static async getUrl()
    {
        await browser.get("https://www.google.com"); 
    }
}