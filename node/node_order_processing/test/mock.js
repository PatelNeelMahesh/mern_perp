const {assign} = require('lodash');

/**
 *
 * @param options
 * @param options.baseUrl
 * @param options.hostName
 * @param options.url
 * @param options.originalUrl
 * @param options.path
 * @param options.ip
 * @constructor
 */
function MockRequest(options) {
    assign(this, options);
}


function MockResponse() {
    this.headers = {};
}

MockResponse.prototype.setHeader = (name, value) => {
    if(!this.headers) this.headers = {};
    this.headers[name.toLowerCase()] = value;
};


module.exports = {
    Request: MockRequest,
    Response: MockResponse
}
