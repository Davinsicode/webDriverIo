class signUp
{
    get signUpLink()
    {
        return $('//a[.="Sign Up"]')
    }
    get fullName()
    {
        return $('[name = "fname"]')
    }
    get mobileNumber()
    {
        return $('[name = "mobilenumber"]')
    }
    get email()
    {
        return $('[name = "email"]')
    }
    get password()
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
    await this.fullName.setValue(userName);
    await this.mobileNumber.setValue("9638527410");
    await this.email.setValue(mail);
    await this.password.setValue("12345");
    await this.submitButton.waitForClickable()
    await this.submitButton.click();

    let conforamtionTitle = await browser.getTitle();
    console.log("Title of the page is: "+conforamtionTitle);
    expect(browser).toHaveTitleContaining("TMS | Confirmation ")
    }
}
export default new signUp()
