
'use strict'

var LoginPage = require('../Pages/LoginPage.js');

describe('Portal 2.0 - Login Page Test', function () {
    var loginPage;

    beforeEach(function () {
        loginPage = new LoginPage();
        loginPage.get();
    });

    it('Should do login with success when username is admin', function () {
        loginPage.login("admin", "@123456");
        browser.sleep(1000);

        var ec = protractor.ExpectedConditions;
        ec.urlContains('showEnvironments=');
    });
});