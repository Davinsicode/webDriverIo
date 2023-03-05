import { default as baseClassPage } from "../../../FrameWork/pageOjectModel/baseClass.page.js"
import loginPage from "../../../FrameWork/pageOjectModel/login.page.js"
import logoutPage from "../../../FrameWork/pageOjectModel/logout.page.js"
import manageBookingPage from "../../../FrameWork/pageOjectModel/manageBooking.page.js"
import packageListPage from "../../../FrameWork/pageOjectModel/packageList.page.js"



describe('Book the Ticket and confirm the ticket', ()=>{
    let packageName = "Kerla"
    let bookingDate = "2023-03-03"
    let month = "2"
    let date = "3"
    
    it('Navigate to the Application', async ()=>{
        await baseClassPage.openBrowser()
    })

    it('Login as User', async ()=>{
    await loginPage.userLogin()
    })

    it('Select the Package', async ()=>{
        await packageListPage.selectPackage(packageName)
    })

    it('Ticket Booking', async ()=>{
        await packageListPage.bookTicket(month, date)
    })

    it('Logout as user', async ()=>{
        await logoutPage.userLogout()
    })

    /* it('Login as admin', async ()=>{
        await loginPage.adminLogin();
    }) */

    /* it('Confirm Booking', async ()=>{
        await manageBookingPage.confirmBooking(packageName, bookingDate)
    }) */

    /* it('Cancel the Booking', async ()=>{
        
        await manageBookingPage.cancelBooking(packageName, bookingDate)
    }) */
    
})