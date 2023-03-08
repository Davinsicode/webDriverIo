import { expect } from "chai"

describe('', ()=>{
    it('Navigate to the Application', async ()=>{
        await browser.maximizeWindow()
        await browser.url("http://testingserver/domain/Online_Banking_System/")
        let title = browser.getTitle()
        expect(title).to.contains("Online Banking System")
    })
    it('Open New Account', async ()=>{
        await browser.$(`//li[contains(.,'Open Account')]`).click()
        let title= await browser.getTitle()
        expect(title).to.contains("Registration Form")
        await browser.scroll(200,200)
    })
    it('Enter Account Details on Registration Form', async ()=>{
        await (await browser.$(`[name="name"]`)).setValue("SureshKumar");
        (await browser.$(`[name="gender"]`)).selectByVisibleText("Male");
        (await browser.$(`[name="mobile"]`)).setValue("8098486523");
        (await browser.$(`[name="email"]`)).setValue("suresh@gmail.com");
        (await browser.$(`[name="landline"]`)).setValue("04151200363");
        (await browser.$(`[name="dob"]`)).setValue("09/03/2023");
        (await browser.$(`[name="pan_no"]`)).setValue("htlps5401s");
        (await browser.$(`[name="citizenship"]`)).setValue("5230");
        (await browser.$(`[name="homeaddrs"]`)).setValue("Chennai");
        (await browser.$(`[name="officeaddrs"]`)).setValue("Bangalore");
        (await browser.$(`[name="state"]`)).selectByVisibleText("California");
        (await browser.$(`[name="city"]`)).selectByVisibleText("San Diego");
        (await browser.$(`[name="pin"]`)).setValue("606402");
        (await browser.$(`[name="arealoc"]`)).setValue("local");
        (await browser.$(`[name="nominee_name"]`)).setValue("vinodh");
        (await browser.$(`[name="nominee_ac_no"]`)).setValue("1234567890");
        (await browser.$(`[name="acctype"]`)).selectByVisibleText("Saving");
        await browser.pause(3000);
        (await browser.$(`//input[@name="submit"]`)).click()
    })
    it('Confirm Details', async ()=>{
        await (await browser.$(`//span[contains(.,'Name :')][1]`)).waitForDisplayed()
        let title = await browser.getTitle()
        console.log("----------------------->"+title);
        let value = await browser.$$(`//div[@class="cnfrm_info"]/span`)
        for (let index = 0; index < value.length; index++) 
        {
            value[index].getText().then((msg)=> {//console.log("******* "+msg+" *******")
            expect(msg).to.include()})    
            
        }
        await browser.debug()
    })
})