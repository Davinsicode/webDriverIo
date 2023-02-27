// Login as admin click the create package, 
// Enter the valid details on all fields click the create package, 
// Click the manage button check whether the package is created.

describe('Create New Package', () => {
    let number = Math.random()
    // let PackageName = "Beach View Party"+number
    let PackageName = "Beach View Party0.11405997797652101"
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
    it('Package Created Verification', async () =>
    {
        await $('//span[.=" Tour Packages"]').moveTo({})
        await $('//a[.="Manage"]').click()
        // Assertion
        let updateTitle = await browser.getTitle()
        await console.log("Title of the page is: "+updateTitle);
        await expect(browser).toHaveTitleContaining("TMS | admin manage packages")
        await $('//div[@ class="copyrights"]').scrollIntoView() // To perform the scroll down
        // Wait Method --> Wait for the element is displayed
        await $('//tbody/tr/td[@ data-th="Name"]/span[.="'+PackageName+'"]').waitForDisplayed()
        // Dynamic path
        let pckName = await $('//tbody/tr/td[@ data-th="Name"]/span[.="'+PackageName+'"]').getText()
        console.log("Created Package Name is: "+pckName);
        await expect(pckName).toEqual(PackageName)
        await console.log("TestCase Pass"); 
    })
}) 

