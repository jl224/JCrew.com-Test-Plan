var pageObjects = {}

var myArray = require('../testAssets/selectorArray')

var fakeInput = require('../testAssets/inputArray')

var myFunction = (object, selector) => {
    pageObjects
        .waitForElementPresent('@selector')
        .pause(4000)
        .moveToElement('@selector', 0, 0)
        .pause(4000)
        .click('@selector')
        .pause(3000)
}

var checkOutFunction = (object, input) => {
    pageObjects
        .waitForElementPresent('@input')
        .pause(2000)
        .setValue('@input', 'value')
        .waitForElementPresent('@input')
        .pause(2000)
        .verify.containsValue('@input', "value")
        .pause(2000)
}

module.exports = {
    before: browser => {
        pageObjects = browser.page.jcrewPO()
            .navigate()
            .maximizeWindow()
    },

    after: browser => { pageObjects.end() },

    'Test Layout3 Using Functions and Arrays': browser => {
        //Navigate to Search Bar
        pageObjects
            .waitForElementPresent('@searchInput3')
            .pause(1000)
            .click('@searchInput3')
            .setValue('@searchInput3', ["Button-front cap-sleeve dress", browser.Keys.ENTER])
            .pause(2000)
            .waitForElementPresent('@dressImage')
            .click('@dressImage')

        //Add Black Dress and Earrings to Shopping Cart
        for (let i = 0; i < myArray.length; i++) {
            pageObjects
                .myFunction(myArray[i])
            console.log(myArray[i])
        }

        //Verify Shopping Cart Contents
        pageObjects
            //Verify Black Dress
            .waitForElementPresent('@dressName')
            .verify.containsText('@dressName', "dress")
            .pause(1000)
            .verify.containsText('@dressColor2', "BLACK")
            .pause(1000)
            .verify.containsText('@dressSize', "Size: PETITE 2")
            .pause(1000)


            //Verrify Earrings
            .waitForElementPresent('@earName')
            .pause(1000)
            .verify.containsText('@earName', "Layered mini pearl hoop earrings")
            .pause(1000)
            .verify.containsText('@earColor2', "PEARL")
            .pause(1000)
            .verify.containsText('@earSize', "Size: ONE SIZE")
            .pause(1000)

            //Edit Dress Quantity
            .waitForElementPresent('@editDress')
            .pause(500)
            .click('@editDress')
            .waitForElementPresent('@minusDress')
            .pause(500)
            .click('@minusDress')
            .pause(500)

            //Verify Shopping Cart Quantity
            .verify.containsText('@finalDressQty', "1")
            .pause(300)
            .verify.containsText('@earQuant', 1)
            .pause(300)

            //Checkout 
            .waitForElementPresent('@checkOut')
            .pause(500)
            .click('@checkOut')
            .pause(500)
        //     .api.getAlertText((result) => {
        //         console.log(result.value)
        //     })
        // pageObjects
        //     .api.dismissAlert()

        //Checkout as Guest
        pageObjects
            .api.url('https://www.jcrew.com/checkout/cart?checkout=true&screenId=login&screenData=')
        pageObjects
            .waitForElementPresent('@checkOutAsGuest2')
            .pause(1000)
            .click('@checkOutAsGuest2')
            .pause(1000)

        //Add Fake Information to Checkout Form and Verify Fake Information
        for (let i = 0; i < fakeInput.length; i++) {
            pageObjects
                .checkOutFunction(fakeInput[i])
            console.log(fakeInput[i])
        }


    },


}