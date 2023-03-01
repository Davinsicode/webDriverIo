describe('Handlin Auto Suggestion in WebPage', ()=>{
    it('Navigate to the Application', async ()=>{
        await browser.maximizeWindow();
        await browser.url("https://www.igp.com/");
    })
    it('Fetch the data from the auto suggestion', async ()=>{
        
        await browser.$(`//input[@ placeholder="Search for gifts"]`).setValue("cakes");
        await browser.$('//ul[@ class="cards-list-suggestions"]').waitForDisplayed()
        let links = await browser.$$(`//ul[@ class="cards-li-list"]/li/a/div[1]`)
        links.forEach(async (link)=>{
            let text = await link.getText()
            expect(text).toContain("Chocolate Cakes")
            link.selectByVisibleText(text)
        })
        
        await browser.debug(5000)
       
    })
})
