var driver = require('./driver');
var GooglePage = require('./google-page');

describe('google search page', function() {

    this.timeout(99999999);
    var client = {};
    var searchPage;

    before(function(done){
        client = driver.init().then(function(){
            searchPage = new GooglePage(client);
            done();
        });

    });

    after(function(done) {
        client.end().then(function(){
            done();
        })

    });

    it('should find stuff', function(done){
        searchPage.open()
            .then(function(){
                return searchPage.searchText('witty doodle');
            })
            .then(function(){
                return searchPage.search();
            })
            .then(function(){
                return driver.pause(1000);
            }).then(function(){
                done();
            });
    });

    it('should be nice promise', function(done){
        var enterText   = searchPage.searchText.bind(null, 'witty doodle');
        var clickSearch = searchPage.search.bind(null);
        var waitASecond = driver.pause.bind(driver, 1000);


        searchPage.open().then(enterText).then(clickSearch).then(waitASecond).then(done);
    });

    it('should work with yield', function* (){
        yield searchPage.open();
        yield searchPage.searchText('witty doodle');
        yield searchPage.search();
        yield driver.pause(1000);
    });

});
