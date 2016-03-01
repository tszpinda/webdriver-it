var driver = require('./driver');
var SearchPage = require('./google-page');

driver.findById('search.spec:searchBox');
driver.findById('search.spec:searchXXX');

var page = new SearchPage(driver);
page.searchText('colorful pants');
//searchPage.searchText('colorful pants');