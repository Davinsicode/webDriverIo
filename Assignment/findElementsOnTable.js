describe('Fetching the Data from the Table', ()=>{
    it('Navigate to the Application', async ()=>{
        await browser.maximizeWindow()
        await browser.url("https://www.icc-cricket.com/rankings/mens/team-rankings/odi")
        let title = await browser.getTitle()
        console.log("Title of the page is : "+title);
        expect(browser).toHaveTitleContaining("ICC Men's ODI Team Rankings | ICC")
    })
    it('Get the value from the table', async ()=>{
        let countries = await browser.$$(`//span[@ class="u-hide-phablet"]`)
        countries.forEach(async (country)=>{
           await  country.getText().then((text)=>{console.log("lllllllllllllllllllllllllllllll"+text)})
        })
        
        await browser.pause(10000)
    } )
})