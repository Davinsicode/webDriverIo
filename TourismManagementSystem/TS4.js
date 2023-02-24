// Login as user book the package logout as user
// Login as admin click on manage booking confirm the booking

describe('Confirm the Ticket Booking', () => {
   
     it('Navigate to the Application', async () =>
    {
        await browser.maximizeWindow() // --> To maximize the window
        await browser.url("https:testingserver/domain/Online_Tourism_Management_System/");
        // await browser.url("http://testingserver/domain/Online_Tourism_Management_System/package-details.php?pkgid=4");
        
        // Verification
        let applicationTitle = await browser.getTitle()
        await console.log("Title of the page is: "+applicationTitle);
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
   it('Book the Ticket Page1', async ()=>{
        let pck = (await browser.$(`//h4[.='Package Name: Kerla']`));
        await pck.scrollIntoView();
        await browser.waitUntil(async ()=>pck);
        (await browser.$(`//h4[.='Package Name: Kerla']/../following-sibling::div/a`)).click()
        console.log("Pack clicked successfully");
        
    })
    it('Book the Ticket Page2', async ()=>{
        await browser.$(`//div[.='SAFE & SECURE ']`).waitForDisplayed()
        await browser.scroll(300,300)
        await browser.$(`//input[@ id="datepicker"]`).click()
        await browser.$(`//td[@data-month="1"][@ data-year="2023"]/a[.='25']`).click()
        await browser.$(`//input[@ id="datepicker1"]`).click()
        try 
        {
            await browser.$(`//td[@data-month="2"][@ data-year="2023"]/a[.='8']`).click()
        } catch (error) 
        {
            await browser.$(`//a[@ title="Next"]`).click();
            await browser.$(`//td[@data-month="2"][@ data-year="2023"]/a[.='8']`).click()
        }

        let cmnt = await browser.$(`//label[.='Comment']`)
        await browser.waitUntil(async ()=>cmnt)
        cmnt.scrollIntoView()
        await browser.$(`//label[.='Comment']/following-sibling::input`).waitForDisplayed()
        await browser.$(`//label[.='Comment']/following-sibling::input`).setValue("I need to be book ticket on March 8 please confirm my ticket")
        await browser.$(`//button[@ name="submit2"]`).waitForClickable()
        await browser.$(`//button[@ name="submit2"]`).click()
        let successtxt = (await browser.$(`//div[@class="succWrap"]`))
        await browser.waitUntil(async()=> successtxt)
        
    })

    it('Logout as User', async ()=>{
        (await browser.$(`//a[.='/ Logout']`)).click()
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

    it('Manage Bookings',async ()=>{
        await browser.$(`//span[.='Manage Booking']`).click()
        await browser.$(`//div[@class="copyrights"]`).scrollIntoView()
        await browser.$(`//tbody/tr[last()]/td/following-sibling::td[@ data-th="Action "]/span/a[.='Confirm']`).click()
        // await browser.$(`//tbody/tr[position()=12]/td/following-sibling::td[@ data-th="Action "]/span/a[.='Confirm']`).click()
        await browser.acceptAlert()
        await browser.$(`//div[contains(.,':Booking Confirm successfully ')]/strong`).waitForDisplayed()
        let title = await browser.getTitle()
        console.log("Title of the page is : "+title);
        expect(browser).toHaveTitleContaining("TMS | Admin manage Bookings")
        console.log("Test Case Pass");
        
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
    
    
    
   
}) 
