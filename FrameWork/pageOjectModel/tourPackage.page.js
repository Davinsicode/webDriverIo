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
    get packageName_txt()
    {
        return $('//input[@ placeholder="Create Package"]')
    }
    get packageType_txt()
    {
        return $('//input[@ id="packagetype"]')
    }
    get packageLocation_txt()
    {
        return $('//input[@ placeholder=" Package Location"]')
    }
    get packagePrice_txt()
    {
        return $('//input[@ id="packageprice"]')
    }
    get packageFeatures_txt()
    {
        return $('//input[@ id="packagefeatures"]')
    }
    get packageDetails_txt()
    {
        return $('//textarea[@ id="packagedetails"]')
    }
    get packageImageButton()
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
        await this.packageName_txt.setValue(PackageName)
        await this.packageType_txt.setValue("Friends")
        await this.packageLocation_txt.setValue("Uchilla Beach")
        await this.packagePrice_txt.setValue("30000")
        await this.packageFeatures_txt.setValue("Foods with Bevarages FREE...!!!")
        await this.packageCreateButton.scrollIntoView()
        await this.packageDetails_txt.setValue("Only four members will allowed for one package")
        await this.packageImageButton.setValue("C:/Users/Admin/Documents/webDriver.io/wolf.jpg")
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