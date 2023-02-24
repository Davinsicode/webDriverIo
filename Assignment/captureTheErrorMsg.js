describe('Capturing The Error Message',()=>{
    it('Naviagate to the Application',async ()=>{
        await browser.maximizeWindow()
        await browser.url("http://testingserver/domain/Hospital_Management_System/hms/doctor/")
        let pageTitle = await browser.getTitle()
        console.log("Title of the page is : "+pageTitle);
        expect(browser).toHaveTitleContaining("Doctor Login")

    })
    it('Login to the Application',async ()=>{
        await browser.$(`[name="username"]`).setValue("admin")
        await browser.$(`[name="password"]`).setValue("pwd")
        await browser.$(`[name="submit"]`).click()
        await browser.$(`#password-error`).waitForDisplayed()
        let errorMsg = await browser.$(`#password-error`).getText()
        console.log("Captured Error Message is: "+errorMsg);

    })
})