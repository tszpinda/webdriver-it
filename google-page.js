function GooglePage(driver) {
    this.searchText = function(text){
        console.log('google-page:setting text:', text);
        driver.findById(text);
    }
}

module.exports = GooglePage;
