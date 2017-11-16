const YamahaAPI = require('yamaha-nodejs');

// Turn On
const turnOn = (ip) => {
    let yamaha;

    if (ip !== undefined && ip !== null) {
        yamaha = new YamahaAPI(ip);
    } else {
        yamaha = new YamahaAPI();
    }

    yamaha.powerOn().then(() => {
        console.info('Powered on')
    });
};

// Turn On
const turnOff = (ip) => {
    let yamaha;

    if (ip !== undefined && ip !== null) {
        yamaha = new YamahaAPI(ip);
    } else {
        yamaha = new YamahaAPI();
    }

    yamaha.powerOff().then(() => {
        console.info('Turned Off')
    });
};

module.exports = {
    turnOn,
    turnOff
};
