
//'use strict';

var ShowEnvironmentsPage = function () {
    
    this.selectEnvironment = function (position) {
        var table = $$('table tbody tr');
        table.get(position).click();
    };
};

module.exports = ShowEnvironmentsPage;