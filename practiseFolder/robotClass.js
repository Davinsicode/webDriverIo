import { default as baseClassPage } from "../FrameWork/pageOjectModel/baseClass.page.js"

describe('Robot', ()=>{
    it('Navigate to the Application', async ()=>{
        browser.url("https://www.google.com")
    })
    it('Open three tabs', async ()=>{
        await browser.keys("ctrl+T")
        await browser.debug(5000)
    })
})