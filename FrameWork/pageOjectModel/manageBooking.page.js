import { expect } from "chai"

class manageBooking
{
    get manageBookingButton()
    {
        return $(`//span[.='Manage Booking']`)
    }
    get copyrightText()
    {
        return $(`//div[@class="copyrights"]`)
    }
    get confirmLink()
    {
        return $$(`//tbody/tr/td[@data-th="RegDate "]/span/a[contains(.,'${this.packageName}')]/ancestor::td/following-sibling::td[@ data-th="From /To "]/span[contains(.,'${this.bookingDate}')]/ancestor::td/following-sibling::td[@ data-th="Action "]/span/a[.='Confirm']`)
        // return $(`//tbody/tr/td[@data-th="RegDate "]/span/a[contains(.,'${this.packageName}')]/ancestor::td/following-sibling::td[@ data-th="From /To "]/span[contains(.,'${this.bookingDate}')]/ancestor::td/following-sibling::td[@ data-th="Action "]/span/a[.='Confirm']`)
        //tbody/tr[last()]/td/following-sibling::td[@ data-th="Action "]/span/a[.='Confirm']
        //tbody/tr/td[@data-th="RegDate "]/span/a[contains(.,'Kerla')]/ancestor::td/following-sibling::td[@ data-th="From /To "]/span[contains(.,'2023-03-02')]/ancestor::td/following-sibling::td[@ data-th="Action "]/span/a[.='Confirm']
    }
    get cancelLink()
    {
        return $$(`//tbody/tr/td[@data-th="RegDate "]/span/a[contains(.,'${this.packageName}')]/ancestor::td/following-sibling::td[@ data-th="From /To "]/span[contains(.,'${this.bookingDate}')]/ancestor::td/following-sibling::td[@ data-th="Action "]/span/a[.='Cancel']`)
        //tbody/tr/td[@data-th="RegDate "]/span/a[contains(.,'Kerla')]/ancestor::td/following-sibling::td[@ data-th="From /To "]/span[contains(.,'2023-03-02')]/ancestor::td/following-sibling::td[@ data-th="Action "]/span/a[.='Cancel']
    }
    get confirmationNotificationText()
    {
        return $(`//div[contains(.,':Booking Confirm successfully ')]/strong`)
        
         
    }
    get cancelNotification()
    {
        return $(`//div[contains(.,':Booking Cancelled successfully')]/strong`)
    }

    async confirmBooking(packageName, bookingDate)
    {
        this.packageName = packageName
        this.bookingDate = bookingDate
        await this.manageBookingButton.click()

        let confirmlinks = await this.confirmLink
        for (let index = 0; index < confirmlinks.length; index++) 
        {
            await confirmlinks[index].scrollIntoView()
            await confirmlinks[index].waitForClickable()
            await confirmlinks[index].click()
            await browser.acceptAlert() 
            await this.confirmationNotificationText.waitForDisplayed()
            await browser.pause(5000)
        }
        
    }

    async cancelBooking(packageName, bookingDate)
    {
        this.packageName = packageName
        this.bookingDate = bookingDate
        await this.manageBookingButton.click()

        let cancellinks = await this.cancelLink
        for (let index = 0; index < cancellinks.length; index++) 
        {
            await cancellinks[index].scrollIntoView()
            console.log("Scrolling");
            await cancellinks[index].waitForClickable()
            console.log("Waitinf for click");
            await cancellinks[index].click()
            console.log("Cancel the package");
            await browser.pause(5000)
            console.log("going to handle the alert popup");
            await browser.acceptAlert() 
            await this.cancelNotification.waitForDisplayed()
            await browser.pause(5000)
            
        }
    }
    
}

export default new manageBooking();