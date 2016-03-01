function Driver(baseUrl) {
    this.baseUrl = baseUrl;
}

var x = 0;
Driver.prototype.findById = function(id){
    x++;
    console.log(x, 'finding by id:', id);
}

var driver = new Driver("http://google.co.uk");

module.exports = driver;