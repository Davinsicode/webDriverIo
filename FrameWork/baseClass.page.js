import pathPage from "./path.page.js";
class baseClass
{
    async openBrowser()
    {
        await browser.maximizeWindow()
        await browser.url(pathPage.allPaths.url)
        let applicationTitle = await browser.getTitle()
        await console.log("Title of the page is: "+applicationTitle)
        await expect(browser).toHaveTitleContaining("TMS | Tourism Management System")
    }
}
export default new baseClass()