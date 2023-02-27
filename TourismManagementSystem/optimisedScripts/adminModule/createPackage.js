import adminLoginPage from "../../../FrameWork/login.page.js";
import baseClassPage from "../../../FrameWork/pageOjectModel/baseClass.page.js";
import pomPage from "../../../FrameWork/tourPackage.page.js";

describe('Test Script 1',()=>{
    let number = Math.random()
     let PackageName = "Beach View Party"+number
    // let PackageName = "Beach View Party0.11405997797652101"
    
    it('Navigate to the Application',async ()=>{ await baseClassPage.openBrowser() })
    
    it('Login as Admin',async ()=>{ await adminLoginPage.adminLogin() })

    it('Create Package',async ()=>{ await pomPage.createPackage(PackageName) })
    
    it('Manage Package', async ()=>{ await  pomPage.managePackage() })

    it('Verifying the created package',async ()=>{ 
        
        await $('//tbody/tr/td[@ data-th="Name"]/span[.="'+PackageName+'"]').scrollIntoView()
        await $('//tbody/tr/td[@ data-th="Name"]/span[.="'+PackageName+'"]').waitForDisplayed()
        let pckName = await $('//tbody/tr/td[@ data-th="Name"]/span[.="'+PackageName+'"]').getText()
        console.log("Created Package Name is: "+pckName);
        await expect(pckName).toEqual(PackageName)
        await console.log("TestCase Pass");
    })

})

