 describe('My Login application', () => {
    it('should login with valid credentials', async () =>
    {
        browser.url("http://admin:Test@123@testingserver/domain/Online_Tourism_Management_System/");
         
        await $('//a[.="/ Sign In"]').click() ;
        await $('//input[@ placeholder="Enter your Email"]').setValue("admin");
        await $('(//input[@ placeholder="Password" ])[2]').setValue("Test@123");
        await $('//input[@ name="signin"]').click()
        await browser.pause('5000')
    }
    )
}) 

