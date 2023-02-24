class mouseActions
{
    mouseHover()
    {
        describe('Handling Mouse Actions', ()=>{
            it('Navigate to the Application',async ()=>{
                await browser.maximizeWindow()
                await browser.url("https://demoqa.com/tool-tips")
                // Mouse Hover
                await browser.$(`#toolTipButton`).moveTo()
            })
        })
    }
    DoubleClick()
    {
        describe('Handling Mouse Actions', ()=>{
            it('Navigate to the Application',async ()=>{
                await browser.maximizeWindow()
                await browser.url("https://demoqa.com/buttons")
                
                // Double Click
                await browser.$(`#doubleClickBtn`).doubleClick()
            })
        })
    }
    DragandDrop()
    {
        describe('Handling Mouse Actions', ()=>{
            it('Navigate to the Application',async ()=>{
                await browser.maximizeWindow()
                await browser.url("https://demoqa.com/droppable")
                // Drag and Drop
                let drop = await browser.$(`#droppable`)
                await browser.$(`#draggable`).dragAndDrop(drop)
            })
        })
    }
}
let ref = new mouseActions()
