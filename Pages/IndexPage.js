
'use strict';

var IndexPage = function () {
    var divCard = $$('div.card');
    var divCardModule = $$('.card.module');
    var divCardView = $$('.card.view .card-block');
    
    var modules = element.all(by.css('.module-name'));
    var subModules= element.all(by.css('.description truncate'));

    this.openModule = function(moduleName){
        modules.each(function(item){
            item.getText().then(function (text) {
                if(text == moduleName){
                    item.click();
                    return;
                }
            });
        });
    };

    this.openSubModule = function(subModuleName){
        subModules.each(function(item){
            item.getText().then(function (text) {
                console.log(subModuleName);
                console.log(text);

                if(text == subModuleName){
                    item.click();
                    return;
                }
            });
        });
    };



    this.openCard = function (cardName) {
        divCard.each(function(item){
            if(item.getText() == cardName){
                item.click();
            }            
        });
    };

    this.openCardModule = function (cardModuleName) {
        divCardModule.each(function(item){
            if(item.getText() == cardModuleName){
                item.click();
            }
        });
    };

    this.openCardView = function (cardViewName) {
        divCardView.each(function(item){
            if(item.getText() == cardViewName){
                item.click();
            }
        });
    };
};

module.exports = IndexPage;