class manageUser
{
    get manageUserButton()
    {
        return $('//span[.="Manage Users"]')
    }
    get userCount()
    {
        return $('(//td[1])[last()]')
    }
    async getUserCount(value_1)
    {
        await this.manageUserButton.click()
        let manageUserTitle = await browser.getTitle() //-->Assertion
        console.log("Title of the page is: "+manageUserTitle);
        expect(browser).toHaveTitleContaining("TMS | Admin manage Users")

        await this.userCount.scrollIntoView()
        await this.userCount.waitForDisplayed()

        let userCountValue = await this.userCount.getText()
        console.log("Total count of the Manage User is: "+userCountValue)

        expect(value_1).toEqual(userCountValue)
        console.log("Test case Pass")
    }
}

export default new manageUser()