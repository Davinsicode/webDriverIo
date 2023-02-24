import { default as pathPage } from "./path.page.js"
class loginPagePaths
{
    get url()
    {
        return pathPage.allPaths.url
    }
    get adminLoginLink()
    {
        return $('//a[.="Admin Login"]')
    }
    get adminName()
    {
        return $('[name="username"]')
    }
    get adminPassword()
    {
    return $('[name="password"]')
    }
    get loginButton()
    {
        return $('[name="login"]')
    }
    async adminLogin()
    {   
        await this.adminLoginLink.click()
        let loginTitle = await browser.getTitle()
        await console.log("Title of the page is: "+loginTitle);
        await expect(browser).toHaveTitleContaining("TMS | Admin Sign in")
        await this.adminName.setValue(pathPage.allPaths.adminUsername)
        await this.adminPassword.setValue(pathPage.allPaths.adminPassword)
        await this.loginButton.click()
        let adminTitle = await browser.getTitle()
        await console.log("Title of the page is: "+adminTitle);
        await expect(browser).toHaveTitleContaining("TMS | Admin Dashboard")
    }
       
}
export default new loginPagePaths()
// console.log(new loginPagePaths().url); 

