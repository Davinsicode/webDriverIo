import { expect } from "chai";

describe('Facebook', ()=>{
    it('Navigate tot the Applicastion', async ()=>{
        browser
        browser.url("https://www.facebook.com")
    })
    it('Login to the application', async ()=>{
        await expect.fail()
        
        (await browser.$(`#email`)).setValue("hello");
        (await browser.$(`#passContainer`)).setValue("hello");
        (await browser.$(`[name="login"]`)).click()
    })
})