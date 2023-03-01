class signUp
{
    get signUpLink()
    {
        return $('//a[.="Sign Up"]')
    }
    get fullName_txt()
    {
        return $('[name = "fname"]')
    }
    get mobileNumber_txt()
    {
        return $('[name = "mobilenumber"]')
    }
    get email_txt()
    {
        return $('[name = "email"]')
    }
    get password_txt()
    {
        return $('[name = "password"]')
    }
    get submitButton()
    {
        return $('[name = "submit"]')
    }

    async createNewUser(userName, mail)
    {
    await this.signUpLink.click();
    await this.fullName_txt.setValue(userName);
    await this.mobileNumber_txt.setValue("9638527410");
    await this.email_txt.setValue(mail);
    await this.password_txt.setValue("12345");
    await this.submitButton.waitForClickable()
    await this.submitButton.click();

    let conforamtionTitle = await browser.getTitle();
    console.log("Title of the page is: "+conforamtionTitle);
    expect(browser).toHaveTitleContaining("TMS | Confirmation ")
    }
}
export default new signUp()
