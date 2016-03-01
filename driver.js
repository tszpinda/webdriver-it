var driver = require('webdriverio');
var options = {
    desiredCapabilities: { browserName: 'chrome' },
    host: '192.168.99.100',
    port: 4444,
    path: '/wd/hub',
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd'
    }
};

module.exports = driver.remote(options);