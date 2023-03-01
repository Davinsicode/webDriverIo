class packageList
{
    get packageNameText()
    {
        return $(`//h4[.='Package Name: Kerla']`)
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
    
    async selectPackage()
    {
        await this.packageNameText.scrollIntoView()
        await this.packageNameText.waitForDisplayed()
        await this.clickPackage.click()
        console.log("Pack clicked successfully");
    }
        
    async bookTicket()
    {
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
        await browser.pause(3000)
        await browser.waitUntil(async ()=>this.commentLabelText)
        this.commentLabelText.scrollIntoView()
        await this.commentBox_txt.waitForDisplayed()
        await this.commentBox_txt.setValue("I need to be book ticket on March 8 please confirm my ticket")
        await this.submitButton.waitForClickable()
        await this.submitButton.click()
        await this.notificationText.waitForDisplayed()
        
        
    }
}

export default new packageList()