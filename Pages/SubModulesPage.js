
'use strict';

var SubModulesPage = function () {

    var subModules= element.all(by.css('.description'));
    var screens = element.all(by.css('.module-name'));

    this.openSubModule = function(subModuleName){
        subModules.each(function(item){
            item.getText().then(function (text) {
                if(text == subModuleName){
                    item.click();
                }
            });
        });
    };

    this.openScreen = function(screenName){
        screens.each(function(item){
            item.getText().then(function (text) {
                console.log(text);
                if(text == screenName){
                    item.click();
                    return;
                }
            });
        });
    };
   
};

module.exports = SubModulesPage;