function GooglePage(driver) {

    this.open = function(){
        return driver.url('https://google.co.uk');
    }

    this.searchText = function(text){
        return driver.setValue('*[name="q"]', text);
    }
    this.search = function() {
        return driver.click('*[name="btnG"]')
    }
}

module.exports = GooglePage;
