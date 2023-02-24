describe('Food Deliver Application', ()=>{
    let restaurantName = "North Street Tavern"
    let before = ""
    let productDetails=[]
    let cartProductDetails=[]
    it('Navigate to the Application', async ()=>{
        await browser.maximizeWindow()
        await browser.url("http://testingserver/domain/Online_Food_Ordering_System/index.php")
        let pagtTitle = await browser.getTitle()
        await console.log("Title of the page is : "+pagtTitle);
        expect(browser).toHaveTitleContaining("Home") //--> Assert
    })
    it('Login to the Application', async ()=>{
        await browser.$('//a[.="Login"]').click()
        await browser.$('//input[@ placeholder="Username"]').setValue("suresh@gmail.com")
        await browser.$('//input[@ placeholder="Password"]').setValue("123456")
        await browser.$('#buttn').click()
    })
    it('Select the Restaurant', async ()=>{
        await browser.$('//a[.="Restaurants "]').waitForDisplayed()
        await browser.$('//a[.="Restaurants "]').click()
        let restaurantPagtTitle = await browser.getTitle()
        await console.log("Title of the page is : "+restaurantPagtTitle);
        expect(browser).toHaveTitleContaining("Restaurants")
        await browser.$('//h5/a[.="'+restaurantName+'"]').click()
        await browser.$('//h3/strong').waitForDisplayed()
        // Price Comparison
        before = await browser.$('//h3/strong').getText()
        let productName = await browser.$('//a[.="Lobster Thermidor"]').getText()
        productDetails.push(productName)
        let productPrice = await browser.$('//a[.="Lobster Thermidor"]/../../../../../div[2]/span').getText()
        productDetails.push(productPrice)
        let productQty =  browser.$('//a[.="Lobster Thermidor"]/../../../../../div[2]/span/following-sibling::input').getValue()
        productDetails.push(productQty)
    })
    it('Add Product to the Cart', async ()=>{
        await browser.$('//a[.="Lobster Thermidor"]/../../../../../div[2]/input[2]').click()
        await browser.scroll(500,500)
        await browser.$('//h3/strong').waitForDisplayed()
        let cartProductName = await browser.$(`//div[@ class="title-row"][contains(.,'Lobster Thermidor')]`).getText()
        cartProductDetails.push(cartProductName)
        let cartProductCost = await browser.$(`//div[@ class="widget widget-cart"]/div/following-sibling::div/div/div/following-sibling::div/div/input[@id="exampleSelect1"]`).getValue()
        cartProductDetails.push(cartProductCost)
        let cartProductQty = await browser.$(`//div[@ class="widget widget-cart"]/div/following-sibling::div/div/div/following-sibling::div/div/input[@id="example-number-input"]`).getValue()
        cartProductDetails.push(cartProductQty)
        // Price Comparison
        let after = await browser.$('//h3/strong').getText()
        await expect((Number)(after.slice(1))).toBeGreaterThan((Number)(before.slice(1)))
        await console.log("Before Add cart value is: "+before.slice(1)+" "+"After Add cart value is: "+after.slice(1));
    })
    it('Check Out the Product', async ()=>{
        console.log(productDetails+" "+cartProductDetails);
        // expect(productDetails).toEqual(cartProductDetails)
    
        await browser.$('//a[.="Checkout"]').click()
        await browser.$('//input[@ value="Order Now"]').click()
        
        // Handling the Popup
        await browser.acceptAlert()
        await browser.acceptAlert()
        let myOrderTilte = await browser.getTitle()
        console.log("Title of the page is : "+myOrderTilte);
        expect(browser).toHaveTitleContaining("My Orders")
        console.log("Test case Pass");
        await browser.debug()
    })
})

/* describe('sample',()=>{
    it('testing', async ()=>{
        await browser.maximizeWindow()
        await browser.url("http://testingserver/domain/Online_Food_Ordering_System/dishes.php?res_id=1&action=add&id=2")
       await browser.$(`//div[@ class="title-row"]`).scroll(500,500)
        let txt = await browser.$(`//div[@ class="title-row"]`).getText()
        console.log(txt);
    })
}) */