describe('Get Value', ()=>{
    it('sample', async ()=>{
        browser.maximizeWindow()
        browser.url("file:///C:/Users/Admin/Documents/samplePage.html")
        let txt = await browser.$('//input').getValue()
        console.log("Value present in the HTML is : "+txt); 
    })
})


