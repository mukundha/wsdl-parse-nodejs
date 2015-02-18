var java = require('java');
var path = require('path');

java.classpath.push(path.join (__dirname, './lib/commons-io-2.4.jar'));
java.classpath.push(path.join (__dirname, './lib/commons-lang3-3.3.2.jar'));
java.classpath.push(path.join (__dirname, './lib/guava-18.0.jar'));
java.classpath.push(path.join (__dirname, './lib/log4j-1.2-api-2.1.jar'));
java.classpath.push(path.join (__dirname, './lib/log4j-api-2.1.jar'));
java.classpath.push(path.join (__dirname, './lib/log4j-core-2.1.jar'));
java.classpath.push(path.join (__dirname, './lib/soap-builder-1.0.0-SNAPSHOT.jar'));
java.classpath.push(path.join (__dirname, './lib/soap-client-1.0.0-SNAPSHOT.jar'));
java.classpath.push(path.join (__dirname, './lib/soap-common-1.0.0-SNAPSHOT.jar'));
java.classpath.push(path.join (__dirname, './lib/soap-legacy-1.0.0-SNAPSHOT.jar'));
java.classpath.push(path.join (__dirname, './lib/wsdl4j-1.6.3.jar'));
java.classpath.push(path.join (__dirname, './lib/wsdlparse.jar'));
java.classpath.push(path.join (__dirname, './lib/xmlbeans-2.3.0.jar'));
java.classpath.push(path.join (__dirname, './lib/wsdlparse.jar'));


parser = function (url){
  this.p = java.newInstanceSync('com.jack.Parser',url);

  this.bindings = function(){
    var list = java.callMethodSync(this.p,'getBindingNames');
    var ret = [];
    for(i=0;i<java.callMethodSync(list,'size');i++){
      ret.push( java.callMethodSync(list,'get',i));
    }
    return ret ;
  }

  this.operations = function (binding){
    var list = java.callMethodSync(this.p,'getOperationNames',binding);
    var ret = [];
    for(i=0;i<java.callMethodSync(list,'size');i++){
      ret.push( java.callMethodSync(list,'get',i));
    }
    return ret ;
  }

  this.sampleRequest = function(binding,operation){
    return java.callMethodSync(this.p,'getSampleRequest',binding,operation);
  }

  this.soapaction = function (binding,operation){
    return java.callMethodSync(this.p,'getSoapActionName',binding,operation);
  }
  return this ;
}


module.exports = parser ;
