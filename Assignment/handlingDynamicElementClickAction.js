describe('Handling Dynamic Link', ()=>{
    it('Navigate to the Application', async ()=>{
        await browser.url("C:/Users/Admin/Documents/samplePage.html")
    })
    it('Fetch the checkbox', async ()=>{
    let links = await browser.$$(`//input[@id="1"]`)
    links.map(async (link)=>{
        await link.waitForDisplayed()
        await link.click()
    })
    })
})