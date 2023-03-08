class homePage
{
    get openAccountButton()
    {
        return browser.$(`//li[contains(.,'Open Account')]`)
    }

    async createAccount()
    {
        await (await this.openAccountButton).click()
    }
}