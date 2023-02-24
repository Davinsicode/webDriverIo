import adminLoginPage from "../../../FrameWork/login.page.js";
import baseClassPage from "../../../FrameWork/baseClass.page.js";
import pomPage from "../../../FrameWork/pom.page.js";

describe('Test Script 1',()=>{
    let number = Math.random()
    // let PackageName = "Beach View Party"+number
    let PackageName = "Beach View Party0.11405997797652101"
    
    it('Navigate to the Application',async ()=>{ await baseClassPage.openBrowser() })
    
    it('Login as Admin',async ()=>{ await adminLoginPage.adminLogin() })

    it('Login as Admin',async ()=>{ await pomPage.createPackage() })
    
    it('Created Package Verification',async ()=>{ await  pomPage.managePackage()
        await $('//tbody/tr/td[@ data-th="Name"]/span[.="'+PackageName+'"]').scrollIntoView()
        await $('//tbody/tr/td[@ data-th="Name"]/span[.="'+PackageName+'"]').waitForDisplayed()
        let pckName = await $('//tbody/tr/td[@ data-th="Name"]/span[.="'+PackageName+'"]').getText()
        console.log("Created Package Name is: "+pckName);
        await expect(pckName).toEqual(PackageName)
        await console.log("TestCase Pass");
    })

})

