
'use strict';

var LoginPage = function () {
    var userInput = $('#UserName');
    var passwordInput = $('#Password');
    var rememberMeInput = $('#RememberMe');
    var submitButton = $('#btnSubmit');

    this.get = function () {
        browser.waitForAngularEnabled(false);
        browser.get('/Portal');
    };

    this.login = function (user, password) {
        userInput.sendKeys(user);
        passwordInput.sendKeys(password);
        submitButton.click();
    };
};

module.exports = LoginPage;