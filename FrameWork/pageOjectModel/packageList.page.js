import { expect } from "chai"

class packageList
{
    get packageNameText()
    {
        return $(`//h4[contains(.,'${this.packageName}')]`)
        ////h4[.='Package Name: Kerla']
    }
    get clickPackage()
    {
        return $(`//h4[.='Package Name: Kerla']/../following-sibling::div/a`)
    }
    get safeSecureText()
    {
        return $(`//div[.='SAFE & SECURE ']`)
    }
    get datePicker1_txt()
    {
        return $(`//input[@ id="datepicker"]`)
    }
    get datePicker2_txt()
    {
        return $(`//input[@ id="datepicker1"]`)
    }
    get fromDate()
    {
        return $(`//td[@data-month='${this.month}'][@ data-year="2023"]/a[.='${this.date}']`)
        //td[@data-month="2"][@ data-year="2023"]/a[.='2']
    }
    get tooDate()
    {
        return $(`//td[@data-month="2"][@ data-year="2023"]/a[.='8']`)
    }
    get nextButton()
    {
        return $(`//a[@ title="Next"]`)
    }
    get commentLabelText()
    {
        return $(`//label[.='Comment']`)
    }
    get commentBox_txt()
    {
        return $(`//label[.='Comment']/following-sibling::input`)
    }
    get submitButton()
    {
        return $(`//button[@ name="submit2"]`)
    }
    get notificationText()
    {
        return $(`//div[@class="succWrap"]`)
    }
    get packageLink()
 {
    return $(`//h4[contains(.,'${this.PackageName}')]`)
    //h4[contains(.,'Beach View Party0.11405997797652101')]
 }
    
    async selectPackage(packageName)
    {
        this.packageName = packageName
        await this.packageNameText.scrollIntoView()
        await this.packageNameText.waitForDisplayed()
        await this.clickPackage.click()
        console.log("Pack clicked successfully");
    }
        
    async bookTicket(month, date)
    {
        this.month = month
        this.date = date
        await this.safeSecureText.waitForDisplayed()
        await browser.scroll(300,300)
        await this.datePicker1_txt.click()
        await this.fromDate.click()
        await this.datePicker2_txt.click()

        try 
        {
            await this.tooDate.click()
        } catch (error) 
        {
            await this.nextButton.click()
            await this.tooDate.click
        }
        //await browser.pause(3000)
        await browser.waitUntil(async ()=>this.commentLabelText)
        this.commentLabelText.scrollIntoView()
        await this.commentBox_txt.waitForDisplayed()
        await this.commentBox_txt.setValue("I need to be book ticket on March 8 please confirm my ticket")
        await this.submitButton.waitForClickable()
        await this.submitButton.click()
        await this.notificationText.waitForDisplayed()
        let title = await browser.getTitle()
        expect(title).to.equal("TMS | Package Details")
        
        
    }

    async createdPackageVerification(packname)
 {
    this.PackageName = packname
    await this.packageLink.scrollIntoView()
    await this.packageLink.waitForDisplayed()
    let pckName = await this.packageLink.getText()
    console.log("---------------->"+packname);
    console.log("Created Package Name is: "+pckName);
    expect(pckName).to.contains(packname)
    console.log("TestCase Pass");
    
 }
}

export default new packageList()