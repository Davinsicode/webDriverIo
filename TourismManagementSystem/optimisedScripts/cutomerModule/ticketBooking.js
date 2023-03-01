import { default as baseClassPage } from "../../../FrameWork/pageOjectModel/baseClass.page.js"
import loginPage from "../../../FrameWork/pageOjectModel/login.page.js"
import logoutPage from "../../../FrameWork/pageOjectModel/logout.page.js"
import manageBookingPage from "../../../FrameWork/pageOjectModel/manageBooking.page.js"
import packageListPage from "../../../FrameWork/pageOjectModel/packageList.page.js"
import tourPackagePage from "../../../FrameWork/pageOjectModel/tourPackage.page.js"


describe('Book the Ticket and confirm the ticket', ()=>{
    it('Navigate to the Application', async ()=>{
        await baseClassPage.openBrowser()
    })

    it('Login as User', async ()=>{
    await loginPage.userLogin()
    })

    it('Select the Package', async ()=>{
        await packageListPage.selectPackage()
    })

    it('Ticket Booking', async ()=>{
        await packageListPage.bookTicket()
    })

    it('Logout as user', async ()=>{
        await logoutPage.userLogout()
    })

    it('Login as admin', async ()=>{
        await loginPage.adminLogin();
    })

    it('Confirm Booking', async ()=>{
        await manageBookingPage.confirmBooking()
    })
    
})