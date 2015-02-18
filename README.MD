# WSDL parse and generate samples

##Why?
I was trying to parse a wsdl and generate sample requests for wsdl operations to auto generate documentation.
I found many useful java based libraries, but none in Javascript, hence created a wrapper around https://github.com/reficio/soap-ws


This is how you could use it,

```
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

```
