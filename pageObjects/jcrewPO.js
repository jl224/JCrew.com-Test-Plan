var myCommands = {
    myFunction: function (selector) {
        this
            .waitForElementPresent(selector)
            .pause(500)
            .moveToElement(selector, 0, 0)
            .pause(500)
            .click(selector)
            .pause(500)
        return this
    },

    checkOutFunction: function (fakeData) {
        this
            .waitForElementPresent(fakeData.fakeInput)
            .pause(500)
            // .moveToElement('@fakeInput', 0, 0)
            // .pause(500)
            .setValue(fakeData.fakeInput, fakeData.value)
            .pause(500)
            .waitForElementPresent(fakeData.fakeInput)
            .verify.valueContains(fakeData.fakeInput, fakeData.value)
            .pause(500)
        return this
    }
}

module.exports = {

    url: 'https://www.jcrew.com',

    commands: [myCommands],

    elements: {

        searchInput: {
            selector: '(//input[type="search"])',
            locateStrategy: 'xpath'
        },

        searchInput2: {
            selector: '(//input[aria-label="Site wide search"])',
            locateStrategy: 'xpath'
        },

        searchInput3: '[aria-label="Site wide search"]',

        // blackDress: 'img[alt="Button-front cap-sleeve dress"]',

        blackDress2: 'a[href = "src="https://www.jcrew.com/s7-img-facade/AK633_BK0001_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480"]',

        blackDress3: {
            selector: '(//h3[text()="Button-front cap-sleeve dress"])',
            locateStrategy: 'xpath'
        },

        blackDress: '*[src="https://www.jcrew.com/s7-img-facade/AK633_BK0001_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480"]',

        dressImage: '[class="js-product__image product-tile__image--small"]',

        popBut: '.layer-wiziwig',

        black: 'img[src="https://www.jcrew.com/s7-img-facade/AK633_BK0001_sw?$pdp_sw20$"]',

        // navyDress: '[aria-label="NAVY $158.00]',

        // navyDress2: '[alt="Button-front cap-sleeve dress NAVY j.crew: button-front cap-sleeve dress"]',

        petite: '[id="Petite__fit-button"]',

        size2: 'div[aria-label="2"]',

        quantity: '#product__quantity-selector option[value="2"]',

        addToCart: '[id="btn__add-to-bag-wide"]',

        addToBagD: 'button[aria-label="Add to Bag"]',

        addToBag2: '[class="product__actions-wide"]',

        addToBagD2: '["data-qaid="pdpProductActionsAddToBagButton"]',

        addToBagD3: '[class="product__actions-wide"]',

        addToBagD4: '[id="c-product__actions"]',

        addToBagD5: '[class="c-product__actions"]',


        earrings: '[src="https://www.jcrew.com/s7-img-facade/AK820_EC7253?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=240&hei=240"]',


        addToBagE: {
            selector: '(//button[@id="btn__add-to-bag-wide"])[2]',
            locateStrategy: 'xpath'
        },

        close: {
            selector: '//span[@aria-label="Close"]',
            locateStrategy: 'xpath'
        },

        close2: '[class="icon-close z-index-2"]',

        close3: '[data-qaid="qsHeader"]',


        cart: '[data-qaid="navDesktopBagBagTabLink"]',






        earName: {
            selector: '//*[contains(text(),"Layered mini pearl hoop earrings")]',
            locateStrategy: 'xpath'
        },


        earSize: {
            selector: '//*[contains(text(),"ONE SIZE")]',
            locateStrategy: 'xpath'
        },

        earColor: {
            selector: '//*[contains(text(),"PEARL")]',
            locateStrategy: 'xpath'
        },

        earColor2: '[data-qaid="itemColor0"]',

        dressColor: {
            selector: '//*[contains(text()="BLACK")]',
            locateStrategy: 'xpath'
        },

        dressColor2: '[data-qaid="itemColor1"]',

        dressSize: {
            selector: '//*[contains(text(),"PETITE 2")]',
            locateStrategy: 'xpath'
        },

        dressName: 'a[data-qaid="itemName1"]',

        earQuant: '[aria-label="Edit Quantity: 1"]',


        dressQuant: '[aria-label="Edit Quantity: 2"]',

        checkOut: '[data-qaid="checkoutButton"]',


        // editDress: '#[value="1"]',

        editDress: 'button[aria-label= "Edit Quantity: 2"]',

        finalDressQty: '[class="quantity__1lZMM"]',

        minusDress: 'button[aria-label="Decrease quantity by one; currently 2"]',


        //Check Out as Guess Fields

        checkOutAsGuest: 'button[class="button__2DP4D theme_primary__2J5iP action_button__1hKYs"]',

        checkOutAsGuest2: {
            selector: '//button[text()="Check out as a guest"]',
            locateStrategy: 'xpath'
        },





        //Fake Input Fields for Checkout

        email: '[id="guest-email"]',

        firstName: '[name="firstName"]',

        firstName2: '[id="address-form-first-name"]',

        lastName: '[name="lastName"]',

        lastName2: '[id="address-form-last-name"]',

        address: '[name="address"]',

        address2: '[id="address-form-zip"]',

        zip: '[id="address-form-zip"]',

        phone: '[name="phone"]',

        phone2: '[id="address-form-phone"]',

        cc: '[name="cc-number"]',

        cc2: '[id = "card_number"]',

        cardExp: '[name="cc-exp"]',

        cardExp2: '[id="card_expiration"]',

        ccv: '[name="cvc"]',

        ccv2: '[id="card_cvc"]',

        billHome: '[aria-label="Billing address is same as shipping"]',

        placeOrder: '[class="button__2DP4D theme_primary__2J5iP place_order_button__1qarw"]',

        promo: '//*[contains(text(),"Promo or Gift Card")]',

        promo2: '[class="input__1VL-V"]',

        applyPromo: '[class="button__2DP4D theme_primary__2J5iP apply_button__2-o_v"]',










    }
}