    // 'Test Layout 2 Using Function but no Array': browser => {
    //     pageObjects
    //         .myFunction('@selector1')
    //         .myFunction('@selector2')
    // },


    // 'Test Layout 1 No Function No Array': browser => {
    //     pageObjects
    //         //Navigate to Search Bar
    //         .waitForElementPresent('@searchInput3')
    //         .click('@searchInput3')
    //         .setValue('@searchInput3', ["Black Dress", browser.Keys.ENTER])
    //         .pause(10000)
    //         // Navigate to Black Dress
    //         .moveToElement('@blackDress3', 0, 0)
    //         .click('@blackDress3')
    //         .pause(300)
    //         .waitForElementPresent('@petiteB')
    //         .moveToElement('@petiteB', 0, 0)
    //         .click('@petiteB')
    //         .pause(300)
    //         .waitForElementPresent('@size22')
    //         .moveToElement('@size22', 0, 0)
    //         .click('@size22')
    //         .pause(300)
    //         .waitForElementPresent('@quantityB')
    //         .click('@quantityB')
    //         .pause(300)
    //         .waitForElementPresent('@addToBag')
    //         .moveToElement('@addToBag', 0, 0)
    //         .click('@addToBag')
    //         .pause(300)
    //         //Navigate to Shopping Cart
    //         .waitForElementPresent('@cart')
    //         .moveToElement('@cart')
    //         .click('@cart')
    // }