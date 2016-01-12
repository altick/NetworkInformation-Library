var self = null;
function Heimdal(file){
  self = this;
  this.file = file;
  this.network_info = new NetworkInformation();
  this.speed_test = new SpeedTest(this.file);

  this.init = function(callbackFunction){
    this.network_info.setInformation(callbackFunction);
  }

  this.runTest = function(onProgressFunction){
    this.speed_test.startSpeedTest(onProgressFunction);
  }

  this.sendData = function(){
    var data = JSON.stringify(self);
    console.log(data);
  }

  this.getNetworkInfo = function(){
    return this.network_info;
  }

  this.getSpeedTest = function(){
    return this.speed_test;
  }

}
