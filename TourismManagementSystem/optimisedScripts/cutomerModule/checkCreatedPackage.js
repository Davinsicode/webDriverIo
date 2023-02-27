import { default as baseClassPage } from "../../../FrameWork/pageOjectModel/baseClass.page.js"
import loginPage from "../../../FrameWork/login.page.js"
import logoutPage from "../../../FrameWork/logout.page.js"
import tourPackagePage from "../../../FrameWork/tourPackage.page.js"
import randomNumber from "../../../FrameWork/genericUtilities/randomNumber.js"



describe('Verify the admin created package are available in Customer Login', ()=>{
   let number = 0
   let PackageName = "Beach View Party"+number
    it('Navigate to the Application', async ()=>{
        await baseClassPage.openBrowser()
    })

    it('Login as Admin', async ()=>{
        await loginPage.adminLogin()
    })

    it('Create New Package', async ()=>{
        number = await randomNumber.randomValues() 
        // await tourPackagePage.createPackage(PackageName)
    })

    it('Logout as admin', async ()=>{
        await logoutPage.adminLogout()
    })

    /* it('Login as User', async ()=>{
        await loginPage.userLogin()
    })

    it('Verify the admin created package is reflected', async ()=>{
        console.log(PackageName);
    }) */
})