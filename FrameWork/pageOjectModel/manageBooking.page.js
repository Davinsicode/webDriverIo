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
        return $(`//tbody/tr[last()]/td/following-sibling::td[@ data-th="Action "]/span/a[.='Confirm']`)
    }
    get bookingConfirmationTxt()
    {
        return $(`//div[contains(.,':Booking Confirm successfully ')]/strong`)
    }

    async confirmBooking()
    {
        await this.manageBookingButton.click()
        await this.copyrightText.scrollIntoView()
        await this.confirmLink.click()
        // await browser.$(`//tbody/tr[position()=12]/td/following-sibling::td[@ data-th="Action "]/span/a[.='Confirm']`).click()
        await browser.acceptAlert()
        await this.bookingConfirmationTxt.waitForDisplayed()
        let title = await browser.getTitle()
        console.log("Title of the page is : "+title);
        expect(browser).toHaveTitleContaining("TMS | Admin manage Bookings")
        console.log("Test Case Pass");
    }
    
}

export default new manageBooking();