import { default as baseClassPage } from "../FrameWork/pageOjectModel/baseClass.page.js"
import dummyPage from "../FrameWork/pageOjectModel/dummy.page.js"

describe('Handling Dynamic Element', ()=>{
    it('Navigate to the Application', async ()=>{
        await baseClassPage.openBrowser()
    })
    it('Select the Package', async ()=>{
        await dummyPage.selectPackage()
    })
})