// login as admin click the tour package click the create button
// enter the details click the create button logut as admin
// login as user click the tour package check whether the created package is displayed
describe('Verification of created package in User Account', () => {
    let number = Math.random()
    let PackageName = "Beach View Party"+number
    
    //let PackageName = "Beach View Party-2"
    
    it('Navigate to the Application', async () =>
    {
        await browser.maximizeWindow() // --> To maximize the window
        await browser.url("https:testingserver/domain/Online_Tourism_Management_System/");
        // Verification
        let applicationTitle = await browser.getTitle()
        await console.log("Title of the page is: "+applicationTitle);
        await expect(browser).toHaveTitleContaining("TMS | Tourism Management System")
    })

    it('Login as Admin', async () =>
    {
        await $('//a[.="Admin Login"]').click() ;
        // Verification
        let loginTitle = await browser.getTitle()
        await console.log("Title of the page is: "+loginTitle);
        await expect(browser).toHaveTitleContaining("TMS | Admin Sign in")
        
        await $('[name="username"]').setValue("admin");
        await $('[name="password"]').setValue("Test@123");
        await $('[name="login"]').click()
        // Verification
        let adminTitle = await browser.getTitle()
        await console.log("Title of the page is: "+adminTitle);
        await expect(browser).toHaveTitleContaining("TMS | Admin Dashboard")
    })

    it('Create Package', async () =>
    {
        await $('//span[.=" Tour Packages"]').moveTo({}) // --> to perform the mouse hover action
        await $('//a[.="Create"]').click()
        // Verification
        let createTitle = await browser.getTitle()
        await console.log("Title of the page is: "+createTitle);
        await expect(browser).toHaveTitleContaining("TMS | Admin Package Creation")
        
        await $('//input[@ placeholder="Create Package"]').setValue(PackageName)
        await $('//input[@ id="packagetype"]').setValue("Friends")
        await $('//input[@ placeholder=" Package Location"]').setValue("Uchilla Beach")
        await $('//input[@ id="packageprice"]').setValue("30000")
        await $('//input[@ id="packagefeatures"]').setValue("Foods with Bevarages FREE...!!!")
        await $('//button[.="Create"]').scrollIntoView() // --> To perform the scroll down
        await $('//textarea[@ id="packagedetails"]').setValue("Only four members will allowed for one package")
        await $('//input[@ id="packageimage"]').setValue("C:/Users/Admin/Documents/webDriver.io/wolf.jpg")
        await $('//button[.="Create"]').click()
        
    })
    
    it('logout as admin', async ()=>{
        await browser.$('//i[@ class="fa fa-angle-down"]').click()
        await browser.$('//a[@ href="logout.php"]').waitForDisplayed()
        await browser.$('//a[@ href="logout.php"]').click()
        let logoutTitle = await browser.getTitle() //-->Assertion
        await console.log("Title of the page is: "+logoutTitle);
        await expect(browser).toHaveTitleContaining("TMS | Admin Sign in")
        await browser.$('//a[.="Back to home"]').click()
        let logoutTitle2 = await browser.getTitle() //-->Assertion
        await console.log("Title of the page is: "+logoutTitle2);
        await expect(browser).toHaveTitleContaining("TMS | Tourism Management System")
    })
    
    it('Login as User', async ()=>{
        await browser.$('//a[.="/ Sign In"]').waitForDisplayed()
        await browser.$('//a[.="/ Sign In"]').click()
        await browser.$('//input[@ placeholder="Enter your Email"]').setValue("suresh@gmail.com")
        await browser.$('(//input[@ placeholder="Password"])[2]').setValue("12345")
        await browser.$('//input[@ name="signin"]').click()
        let userLoginTitle = await browser.getTitle()
        await console.log("Title of the page is: "+userLoginTitle);
        await expect(browser).toHaveTitleContaining("TMS | Package List")
    })
    
    it('verify the created package is displayed in userAccount', async ()=>
    {
        await browser.$('//div/h4[.="Package Name: '+PackageName+'"]').scrollIntoView()
        await browser.$('//div/h4[.="Package Name: '+PackageName+'"]').waitForDisplayed()
        let pckName = await browser.$('//div/h4[.="Package Name: '+PackageName+'"]').getText()
        await expect(pckName).toContain(PackageName)
        await console.log("Test Case Pass");
    })
   
}) 
