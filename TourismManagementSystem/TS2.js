// click the signUp button enter the details click the create button
// Login as admin click the dashboard check the user count and click the manage user check the count, 
// check whether both dashboard user count and manageuser count is equal

describe('Check the User Count',()=>{
    let value = ""
   
    it('Navigate to the Application',async ()=>{
        await browser.maximizeWindow()
        await browser.url("https:testingserver/domain/Online_Tourism_Management_System/")
        let appTitle = await browser.getTitle() //--> Assertion
        await console.log("Title of the page is: "+appTitle);
        await expect(browser).toHaveTitleContaining("TMS | Tourism Management System")
    })
    it('Create New Account', async ()=>{
        await browser.$('//a[.="Sign Up"]').click()
        await browser.$('[name = "fname"]').waitForDisplayed() //--> Wait Method
        await browser.$('[name = "fname"]').setValue("suresh")
        await browser.$('[name = "mobilenumber"]').setValue("9638527410")
        await browser.$('[name = "email"]').setValue("suresh1@gmail.com")
        await browser.$('[name = "password"]').setValue("12345")
        await browser.$('[name = "submit"]').click()
        let conforamtionTitle = await browser.getTitle() //--> Assertion
        await console.log("Title of the page is: "+conforamtionTitle);
       // await expect(browser).toHaveTitleContaining("TMS | Confirmation ")
        
    })
    it('Login as Admin',async ()=>{
        await $('//a[.="Admin Login"]').click() ;
        let loginTitle = await browser.getTitle() //--> Assertion
        await console.log("Title of the page is: "+loginTitle);
        await expect(browser).toHaveTitleContaining("TMS | Admin Sign in")
        await (await $('//input[@ name="username"]')).waitForDisplayed() //--> Wait Method
        await (await $('//input[@ name="username"]')).setValue("admin")
        await $('//input[@ name="password"]').setValue("Test@123");
        await $('//input[@ name="login"]').click()
        let adminTitle = await browser.getTitle() //--> Assertion
        await console.log("Title of the page is: "+adminTitle);
        await expect(browser).toHaveTitleContaining("TMS | Admin Dashboard")
    })
    it('Get the count of Dasboard user', async ()=>{
        value = await (await browser.$('//h3[.="User"]/following-sibling::h4')).getText()
        await console.log("Total count of the User is: "+value);
    })
    it('Get the count of manageUser', async ()=>{
        await (await browser.$('//span[.="Manage Users"]')).click()
        let manageUserTitle = await browser.getTitle() //-->Assertion
        await console.log("Title of the page is: "+manageUserTitle);
        await expect(browser).toHaveTitleContaining("TMS | Admin manage Users")
        await browser.$('(//td[1])[last()]').scrollIntoView() //--> Scrolling
        await browser.$('(//td[1])[last()]').waitForDisplayed() //--> Wait Method
        let userCountValue = await browser.$('(//td[1])[last()]').getText()
        await console.log(userCountValue);
        await expect(value).toEqual(userCountValue) //--> Verification
        await console.log("Test case Pass");
    })
    
})