const moment = require('moment');

function bar(format) {
    return moment().format(format);
}

const b = 50;
  
exports.bar = bar;
exports.b = b;