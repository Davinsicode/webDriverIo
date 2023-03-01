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
    get usersignInLink()
    {
        return $('//a[.="/ Sign In"]')
    }
    get userName()
    {
        return $('//input[@ placeholder="Enter your Email"]')
    }
    get userPassword()
    {
        return $('(//input[@ placeholder="Password"])[2]')
    }
    get userSignInButton()
    {
        return $('//input[@ name="signin"]')
    }
    
    async adminLogin()
    {   
        await this.adminLoginLink.waitForDisplayed()
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

    async userLogin()
    {
        await this.usersignInLink.waitForDisplayed()
        await this.usersignInLink.click()
        await this.userName.setValue('suresh@gmail.com')
        await this.userPassword.setValue('12345')
        await this.userSignInButton.click()

        let userLoginTitle = await browser.getTitle()
        console.log("Title of the page is: "+userLoginTitle);
        expect(browser).toHaveTitleContaining("TMS | Package List")
    }
}
export default new loginPagePaths()
// console.log(new loginPagePaths().url); 

