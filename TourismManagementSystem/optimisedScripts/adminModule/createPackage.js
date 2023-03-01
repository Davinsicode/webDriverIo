import { default as baseClassPage } from "../../../FrameWork/pageOjectModel/baseClass.page.js"
import loginPage from "../../../FrameWork/pageOjectModel/login.page.js"
import tourPackagePage from "../../../FrameWork/pageOjectModel/tourPackage.page.js"


describe('Create New Package', ()=>{
    
    let number = Math.random()
    let PackageName = "Beach View Party"+number
    // let PackageName = "Beach View Party0.11405997797652101"

    it('Navigate to the Application', async ()=>{ await baseClassPage.openBrowser() })

    /* it('Login as Admin', async ()=>{ await loginPage.adminLogin() })

    it('Create Package', async ()=>{ await tourPackagePage.createPackage(PackageName) })

    it('Manage Package', async ()=>{ await  tourPackagePage.managePackage() })

    it('Verifying the created package',async ()=>{ 
        
        await $('//tbody/tr/td[@ data-th="Name"]/span[.="'+PackageName+'"]').scrollIntoView()
        await $('//tbody/tr/td[@ data-th="Name"]/span[.="'+PackageName+'"]').waitForDisplayed()
        let pckName = await $('//tbody/tr/td[@ data-th="Name"]/span[.="'+PackageName+'"]').getText()
        console.log("Created Package Name is: "+pckName);
        await expect(pckName).toEqual(PackageName)
        await console.log("TestCase Pass");
    }) */
})