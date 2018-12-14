
exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['Tests/GrupoEconomicoPageTest.js'],
    // capabilities: {
    //     'browserName': 'chrome',
    //     'chromeOptions': {
    //         'args': [
    //             '--disable-infobars', '--headless', '--disable-gpu', '--window-size=800,600'
    //         ]
    //     }
    // },
    baseUrl: 'http://172.16.138.21:8085/Portal'
  };