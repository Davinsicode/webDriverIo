class packageList
{
    get packageName()
    {
        return $(`//h4[.='Package Name: Kerla']`)
    }
    get clickPackage()
    {
        return $(`//h4[.='Package Name: Kerla']/../following-sibling::div/a`)
    }
    get safeSecure_txt()
    {
        return $(`//div[.='SAFE & SECURE ']`)
    }
    get datePicker1()
    {
        return $(`//input[@ id="datepicker"]`)
    }
    get datePicker2()
    {
        return $(`//input[@ id="datepicker1"]`)
    }
    get fromDate()
    {
        return $(`//td[@data-month="2"][@ data-year="2023"]/a[.='2']`)
    }
    get tooDate()
    {
        return $(`//td[@data-month="2"][@ data-year="2023"]/a[.='8']`)
    }
    get nextButton()
    {
        return $(`//a[@ title="Next"]`)
    }
    get commentLabel()
    {
        return $(`//label[.='Comment']`)
    }
    get commentBox()
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
    
    async selectPackage()
    {
        await this.packageName.scrollIntoView()
        await this.packageName.waitForDisplayed()
        await this.clickPackage.click()
        console.log("Pack clicked successfully");
    }
        
    async bookTicket()
    {
        await this.safeSecure_txt.waitForDisplayed()
        await browser.scroll(300,300)
        await this.datePicker1.click()
        await this.fromDate.click()
        await this.datePicker2.click()

        try 
        {
            await this.tooDate.click()
        } catch (error) 
        {
            await this.nextButton.click()
            await this.tooDate.click
        }
        await browser.pause(3000)
        await browser.waitUntil(async ()=>this.commentLabel)
        this.commentLabel.scrollIntoView()
        await this.commentBox.waitForDisplayed()
        await this.commentBox.setValue("I need to be book ticket on March 8 please confirm my ticket")
        await this.submitButton.waitForClickable()
        await this.submitButton.click()
        await this.notificationText.waitForDisplayed()
        
        
    }
}

export default new packageList()