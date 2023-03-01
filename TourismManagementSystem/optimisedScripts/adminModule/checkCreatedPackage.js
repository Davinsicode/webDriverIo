import randomNumber from "../../../FrameWork/genericUtilities/randomNumber.js"
import { default as baseClassPage } from "../../../FrameWork/pageOjectModel/baseClass.page.js"
import loginPage from "../../../FrameWork/pageOjectModel/login.page.js"
import logoutPage from "../../../FrameWork/pageOjectModel/logout.page.js"
import packageListPage from "../../../FrameWork/pageOjectModel/packageList.page.js"
import tourPackagePage from "../../../FrameWork/pageOjectModel/tourPackage.page.js"




describe('Verify the admin created package is displayed in customer page', ()=>{
    
    let number = randomNumber.randomValues()
    let PackageName = "Beach View Party"+number

    it('Navigate the Application', async ()=>{
        await baseClassPage.openBrowser()
    })

    it('Login as admin', async ()=>{
        await loginPage.adminLogin()
    })

    it('Create Package', async ()=>{
        await tourPackagePage.createPackage(PackageName)
    })
    
    it('Logout as admin', async ()=>{
        await logoutPage.adminLogout()
    })

    it('Login as User', async ()=>{
        await loginPage.userLogin()
    })

    it('Verifying the admin created package', async ()=>{
        await browser.$('//div/h4[.="Package Name: '+PackageName+'"]').scrollIntoView()
        await browser.$('//div/h4[.="Package Name: '+PackageName+'"]').waitForDisplayed()
        let pckName = await browser.$('//div/h4[.="Package Name: '+PackageName+'"]').getText()
        expect(pckName).toContain(PackageName)
        console.log("Test Case Pass");
    })

    
})