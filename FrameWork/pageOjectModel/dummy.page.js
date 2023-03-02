class dynamiXpath
{
    get selectPackagesLink()
    {
        return $(`//h4[.='${this.packageName}']`)
        ////h4[.='Package Name: Manali Trip ']
    }
    get detailsButton()
    {
        return $(`//h4[.='${this.packageName}']/../following-sibling::div/a`)
        ////h4[.='Package Name: Manali Trip ']/../following-sibling::div/a
    }

    async selectPackage()
    {
        await this.selectPackagesLink.scrollIntoView()
        await this.detailsButton.click()
    }
}

export default new dynamiXpath()