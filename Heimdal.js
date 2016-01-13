var self = null;
function Heimdal(file, server){
  this.server_url = server || 'http://localhost/';
  self = this;
  this.network_info = new NetworkInformation();
  this.speed_test = new SpeedTest(file);

  this.init = function(callbackFunction){
    this.network_info.setInformation(callbackFunction);
  }

  this.runTest = function(onProgressFunction){
    this.speed_test.startSpeedTest(onProgressFunction);
  }

  this.sendData = function(){
    var information = JSON.stringify(self);
    $.ajax({
      type: 'POST',
      contentType: "application/json; charset=utf-8",
      url: this.server_url,
      data: information,
      dataType: "json",
      success: function(resp){
        console.log("Success");
      }
    });
  }

  this.getNetworkInfo = function(){
    return this.network_info;
  }

  this.getSpeedTest = function(){
    return this.speed_test;
  }

}
