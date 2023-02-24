describe('Handling Calendar Popup',()=>{
    it('ToolsQA', async ()=>{
        await browser.maximizeWindow()
        await browser.url(`https://demoqa.com/date-picker`)
        await browser.$(`#datePickerMonthYearInput`).click()
        try {
            await browser.$(`//div[@ aria-label="month  2023-03"]/div/div[.='5']`).click()    
        } catch (error) {
            await browser.$(`//button[.='Next Month']`).click()
            await browser.$(`//div[@ aria-label="month  2023-+03+"]/div/div[.='5']`).click()
        }
        
        
    })
})