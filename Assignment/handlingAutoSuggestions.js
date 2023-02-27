describe('Handlin Auto Suggestion in WebPage', ()=>{
    it('Navigate to the Application', async ()=>{
        await browser.maximizeWindow();
        await browser.url("https://www.igp.com/");
    })
    it('Fetch the data from the auto suggestion', async ()=>{
        await(await browser.$(`//input[@ placeholder="Search for gifts"]`)).setValue("cakes");
        //await browser.$$('//ul[@ class="cards-li-list"]/li/a/div').
        const arr=Promise.all(await browser.$$('//ul[@ class="cards-li-list"]/li/a/div').map(async (link)=>{
           return  await link.getText()

        }))
     console.log(arr);
            
 
    })
})