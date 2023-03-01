
import { expect } from "chai";
import pathPage from "./path.page.js";
class baseClass
{
    async openBrowser()
    {
        await browser.maximizeWindow()
        await browser.url(pathPage.allPaths.url)
        let applicationTitle = await browser.getTitle()
        await console.log("Title of the page is: "+applicationTitle)
        //await expect(browser).toHaveTitleContaining("TMS | Tourism Management System")
        expect(applicationTitle).to.contains("TMS | Tourism Management System")
        await console.log("Chai Assertion Workin Fine");
    }
}
export default new baseClass()
