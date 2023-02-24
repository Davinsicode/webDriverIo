class pomClass
{
    get tourPackageButton()
    {
        return $('//span[.=" Tour Packages"]')
    }
    get tourPackageCreateButton()
    {
        return $('//a[.="Create"]')
    }
    get tourPackageManageButton()
    {
        return $('//a[.="Manage"]')
    }
    get packageName()
    {
        return $('//input[@ placeholder="Create Package"]')
    }
    get packageType()
    {
        return $('//input[@ id="packagetype"]')
    }
    get packageLocation()
    {
        return $('//input[@ placeholder=" Package Location"]')
    }
    get packagePrice()
    {
        return $('//input[@ id="packageprice"]')
    }
    get packageFeatures()
    {
        return $('//input[@ id="packagefeatures"]')
    }
    get packageDetails()
    {
        return $('//textarea[@ id="packagedetails"]')
    }
    get packageImage()
    {
        return $('//input[@ id="packageimage"]')
    }
    get packageCreateButton()
    {
       return $('//button[.="Create"]')
    }

    async createPackage(PackageName)
    {
        await this.tourPackageButton.moveTo({})
        await this.tourPackageCreateButton.click()
        let createTitle = await browser.getTitle()
        await console.log("Title of the page is: "+createTitle);
        await expect(browser).toHaveTitleContaining("TMS | Admin Package Creation")
        await this.packageName.setValue(PackageName)
        await this.packageType.setValue("Friends")
        await this.packageLocation.setValue("Uchilla Beach")
        await this.packagePrice.setValue("30000")
        await this.packageFeatures.setValue("Foods with Bevarages FREE...!!!")
        await this.packageCreateButton.scrollIntoView()
        await this.packageDetails.setValue("Only four members will allowed for one package")
        await this.packageImage.setValue("C:/Users/Admin/Documents/webDriver.io/wolf.jpg")
        await this.packageCreateButton.click()
    }
    async managePackage()
    {
        await this.tourPackageButton.moveTo({})
        await this.tourPackageManageButton.click()
        let updateTitle = await browser.getTitle()
        await console.log("Title of the page is: "+updateTitle);
        await expect(browser).toHaveTitleContaining("TMS | admin manage packages")
        
    }
}
export default new pomClass()