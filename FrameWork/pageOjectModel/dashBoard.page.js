class dashboard
{
    get userCount()
    {
        return $('//h3[.="User"]/following-sibling::h4')
    }

    async getuserCount()
    {
       let value = await this.userCount.getText()
       console.log("Total count of the Dashboard User is: "+value);
       return value 
    }
}

export default new dashboard();