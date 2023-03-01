import { default as baseClassPage } from "../FrameWork/pageOjectModel/baseClass.page.js"

describe('samplelogin', ()=>{
    it('Navigate to the Application', async ()=>{
        await baseClassPage.openBrowser()
    })
} )