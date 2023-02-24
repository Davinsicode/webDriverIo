describe('Find Elements',()=>{
    it('Fetching Links from the Flipkart', async ()=>{
        await browser.maximizeWindow()
        await browser.url("file:///C:/Users/Admin/Documents/samplePage.html")
        let links = await browser.$$('//a')
        links.forEach((ref)=>{ console.log(ref.getText()); })
        await browser.debug()
    })
})

