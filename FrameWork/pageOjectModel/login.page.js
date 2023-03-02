import { expect } from "chai"
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
    get adminName_txt()
    {
        return $('[name="username"]')
    }
    get adminPassword_txt()
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
    get userName_txt()
    {
        return $('//input[@ placeholder="Enter your Email"]')
    }
    get userPassword_txt()
    {
        return $('(//input[@ placeholder="Password"])[2]')
    }
    get userSignInButton()
    {
        return $('//input[@ name="signin"]')
    }
    
    async adminLogin()
    {   
        
        await browser.waitUntil(()=>this.adminLoginLink.isDisplayed())
        // await this.adminLoginLink.waitForDisplayed() 
        await this.adminLoginLink.click()
        let loginTitle = await browser.getTitle()
        console.log("Title of the page is: "+loginTitle);
        //expect(browser).toHaveTitleContaining("TMS | Admin Sign in")
        expect(loginTitle).to.equal("TMS | Admin Sign in") //-----> chai Assertion
        await this.adminName_txt.setValue(pathPage.allPaths.adminUsername)
        await this.adminPassword_txt.setValue(pathPage.allPaths.adminPassword)
        await this.loginButton.click()
        let adminTitle = await browser.getTitle()
        console.log("Title of the page is: "+adminTitle);
        //expect(browser).toHaveTitleContaining("TMS | Admin Dashboard")
        expect(adminTitle).to.equal("TMS | Admin Dashboard")
    }

    async userLogin()
    {
        await this.usersignInLink.waitForDisplayed()
        await this.usersignInLink.click()
        await this.userName_txt.setValue('suresh@gmail.com')
        await this.userPassword_txt.setValue('12345')
        await this.userSignInButton.click()

        let userLoginTitle = await browser.getTitle()
        console.log("Title of the page is: "+userLoginTitle);
        //expect(browser).toHaveTitleContaining("TMS | Package List")
        expect(userLoginTitle).to.equal("TMS | Package List")
    }
}
export default new loginPagePaths()
// console.log(new loginPagePaths().url); 

