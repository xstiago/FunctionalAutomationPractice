
'use strict'

var LoginPage = require('../Pages/LoginPage.js');
var ShowEnvironmentsPage = require('../Pages/ShowEnvironmentsPage.js');
var IndexPage = require('../Pages/IndexPage.js');
var SubModulesPage = require('../Pages/SubModulesPage.js');

describe('Portal 2.0 - Grupo Econômico Page Test', function () {
    var loginPage;
    var showEnvironmentsPage;
    var indexPage;
    var subModulesPage;

    beforeEach(function () {
        loginPage = new LoginPage();
        showEnvironmentsPage = new ShowEnvironmentsPage();
        indexPage = new IndexPage();
        subModulesPage = new SubModulesPage();

        loginPage.get();
    });

    it('Should show error message when try entry grupo economico empty field', function () {
        loginPage.login("admin", "@123456");
        browser.sleep(1000);

        var ec = protractor.ExpectedConditions;
        ec.urlContains('showEnvironments=');

        showEnvironmentsPage.selectEnvironment(1);
        browser.sleep(5000);

        indexPage.openModule("MID-e Gestão de Contratos");
        browser.sleep(1000);

        subModulesPage.openSubModule("CADASTROS");
        browser.sleep(1000);

        subModulesPage.openScreen("GRUPOS ECONÔMICOS");
        browser.sleep(3000);
    });

});