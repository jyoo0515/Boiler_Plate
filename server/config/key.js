if(process.env.Node_EVN === 'production') {
    module.exports = require('./prod');
}
else {
    module.exports = require('./dev');
}