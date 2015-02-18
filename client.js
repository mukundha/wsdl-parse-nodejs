var parser = require('./app.js');
var url = 'http://wsf.cdyne.com/WeatherWS/Weather.asmx?wsdl';

var p = parser(url);
var bindings = p.bindings();
console.log(bindings);

var ops = p.operations('WeatherSoap');
console.log(ops);

var samplereq = p.sampleRequest('WeatherSoap', 'GetWeatherInformation');
console.log(samplereq);

var soapaction = p.soapaction('WeatherSoap', 'GetWeatherInformation');
console.log(soapaction);
