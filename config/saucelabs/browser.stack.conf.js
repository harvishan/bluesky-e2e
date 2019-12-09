exports.config = {
    user: 'harshanm1',
    key: 'Ake1pHeKF7EZPXxhpK4A',

    updateJob: false,
    specs: [
        './tests/specs/**/app.login.spec.js',
    ],
    exclude: [],

    capabilities: [{
        'device': 'Samsung Galaxy S9',
        "platform": "Android",
        "orientation": "PORTRAIT",
        "automationName": "UiAutomator2",
        // 'os_version': '11',
        "app":"bs://aba26b6a9054861e9e7de431536abe433cf141fd"
        // "app_url":"bs://1a25a9ebfdd320b74f828ec8cba41c868fbbe98f"
    }],

    logLevel: 'warn',
    coloredLogs: true,
    screenshotPath: './errorShots/',
    baseUrl: '',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    host: 'hub.browserstack.com',

    // before: function () {
    //     var chai = require('chai');
    //     global.expect = chai.expect;
    //     chai.Should();
    // },
    // framework: 'jasmine-framework',
    // mochaOpts: {
    //     ui: 'bdd',
    //     timeout: 60000
    // },

    runner: 'local',
    framework: 'jasmine',
    jasmineNodeOpts: {
        // Updated the timeout to 30 seconds due to possible longer appium calls
        // When using XPATH
        defaultTimeoutInterval: 90000,
    },
    beforeSession: (config, capabilities, specs) => {
        require('@babel/register');
    },
}










// const { config } = require('../wdio.shared.conf');
//
//
// // ============
// // Specs
// // ============
// config.specs = [
//     // './tests/specs/**/app*.spec.js',
//     './tests/specs/**/app.login.spec.js',
// ];
//
// // ============
// // Capabilities
// // ============
// // For all capabilities please check
// // http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
// config.capabilities = [
//     {
//         'device': 'Samsung Galaxy S9',
//         "platform": "Android",
//         "orientation": "PORTRAIT",
//         "automationName": "UiAutomator2",
//         // 'os_version': '11',
//         "app":"bs://1a25a9ebfdd320b74f828ec8cba41c868fbbe98f"
//
//
//         // deviceName: 'Samsung Galaxy S9*',
//         // automationName: 'UiAutomator2',
//         // // The reference to the app
//         // testobject_app_id: '4',
//         // // The api key that has a reference to the app-project in the TO cloud
//         // testobject_api_key: process.env.SAUCE_RDC_EU_ACCESS_KEY_ANDROID_WDIO,
//         // // The name of the test for in the cloud
//         // testobject_test_name: 'wdio-demo-app-test',
//         // // Some default settings
//         // // You can find more info in the TO Appium Basic Setup section
//         // platformName: 'Android',
//         // idleTimeout: 180,
//         // maxInstances: 6,
//         // testobject_cache_device: true,
//         // noReset: true,
//         // orientation: 'PORTRAIT',
//         // newCommandTimeout: 180,
//         // phoneOnly: true,
//         // tabletOnly: false,
//     },
// ];
//
//
//
// // // =========================
// // // Sauce RDC specific config
// // // =========================
// // // The new version of WebdriverIO will:
// // // - automatically update the job status in the RDC cloud
// // // - automatically default to the US RDC cloud
// // config.services = [ 'sauce' ];
// // // If you need to connect to the US RDC cloud comment the below line of code
// // config.region = 'eu';
// // // and uncomment the below line of code
// // // config.region = 'us';
// //
// // // This port was defined in the `wdio.shared.conf.js`
// // delete config.port;
//
// exports.config = config;
