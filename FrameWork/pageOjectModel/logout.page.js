class logout
{
    get arrowDown()
    {
        return $('//i[@ class="fa fa-angle-down"]')
    }
    get adminLogoutLink()
    {
        return $('//a[@ href="logout.php"]')
    }
    get backToHomeLink()
    {
        return $('//a[.="Back to home"]')
    }
    get userLogoutLink()
    {
        return $(`//a[.='/ Logout']`)
    }

    async adminLogout()
    {
        await this.arrowDown.click()
        await this.adminLogoutLink.waitForDisplayed()
        await this.adminLogoutLink.click()

        let logoutTitle = await browser.getTitle()
        await console.log("Title of the page is: "+logoutTitle)
        await expect(browser).toHaveTitleContaining("TMS | Admin Sign in")

        await this.backToHomeLink.click()

        let logoutTitle2 = await browser.getTitle()
        await console.log("Title of the page is: "+logoutTitle2)
        await expect(browser).toHaveTitleContaining("TMS | Tourism Management System")
    }

    async userLogout()
    {
        await this.userLogoutLink.click()
    }
}

export default new logout();