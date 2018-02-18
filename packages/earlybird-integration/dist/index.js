'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createQuery = createQuery;
exports.default = graph;

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var graphAddress = 'https://graph.facebook.com/v2.11';

function createQuery(parameters) {
  return Object.keys(parameters).map(function (key) {
    return key + '=' + parameters[key];
  }).join('&');
}

function graph(request) {
  var method = request.method,
      headers = request.headers,
      body = request.body;

  var options = {
    method: method,
    headers: headers,
    body: body
  };
  if (method === 'GET') delete options.body;
  var url = graphAddress.concat(request.url).concat(method === 'GET' ? '?' + createQuery(Object.assign({}, body)) : '');
  return (0, _isomorphicFetch2.default)(url, options).then(function (response) {
    if (response.status >= 400) {
      var _headers = JSON.stringify(response.headers._headers, null, 2);
      var _body = response.text();
      throw new Error(response.status + ' ' + response.url + ' ' + _headers + ' ' + _body);
    }
    return response.json();
  }).then(function (json) {
    return json.data || json;
  }).catch(function (error) {
    return error;
  });
}