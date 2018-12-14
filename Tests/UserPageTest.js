
'use strict'

var LoginPage = require('../Pages/LoginPage.js');
var ShowEnvironmentsPage = require('../Pages/ShowEnvironmentsPage.js');
var IndexPage = require('../Pages/IndexPage.js');

describe('Portal 2.0 - User Page Test', function () {
    var loginPage;
    var showEnvironmentsPage;
    var indexPage;

    beforeEach(function () {
        loginPage = new LoginPage();
        showEnvironmentsPage = new ShowEnvironmentsPage();
        indexPage = new IndexPage();

        loginPage.get();
    });

    it('Should find user Admin when username is Admin', function () {
        loginPage.login("admin", "@123456");
        browser.sleep(1000);

        var ec = protractor.ExpectedConditions;
        ec.urlContains('showEnvironments=');
        
        showEnvironmentsPage.selectEnvironment(0);
        browser.sleep(5000);

        indexPage.openCard('Utilitário (Server)');
        browser.sleep(500);

        indexPage.openCardModule('Sistema');
        browser.sleep(500);

        indexPage.openCardView('Usuário Autorização');
        browser.sleep(500);
    });
});