describe('Handling the DropDown',()=>{
    it('Naviagate to the Application',async ()=>{
        await browser.maximizeWindow()
        await browser.url("file:///C:/Users/Admin/Documents/samplePage.html")
        await browser.$(`#drpdwn`).selectByAttribute('id','2')
        await browser.$(`#drpdwn`).selectByIndex(2)
        await browser.$(`#drpdwn`).selectByVisibleText("JAVASCRIPT")
        await browser.debug()
    })
   
})