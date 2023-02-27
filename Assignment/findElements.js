describe('Find Elements',()=>{
    it('Fetching Links from the Flipkart', async ()=>{
        await browser.maximizeWindow()
        await browser.url("file:///C:/Users/Admin/Documents/samplePage.html")
        let links = await browser.$$('//a')
        console.log("*****************************************"+links.length);
        // links.forEach(async (ref)=>{ console.log(await ref.getText().then((value)=>value)); }) //--------------> forEachLoop Method
        
        links.map(async (msg)=> console.log("---->"+await msg.getText().then((value)=>value ))) //--------------> map Method
        await browser.pause(10000)
        
    })
})

