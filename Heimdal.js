/**
* @author Michel Llorens http://michotastico.github.io
* @version 1.0.0
*/


/**
* Heimdal - Main class who administrate the use of NetworkInformation
& SpeedTest classes
* @class Heimdal
* @classdesc Main class who administrate the use of NetworkInformation
& SpeedTest classes
*
* @param  {string} file   URL of the file to be used in the SpeedTest
* @param  {string} server URL of the server where the JSON will be send
*/
function Heimdal(file, server){
  this.server_url = server || 'http://localhost/';
  this.network_info = new NetworkInformation();
  this.speed_test = new SpeedTest(file);


  /**
  * init - Call to NetworkInformation to init his params and execute the
  * callback function
  *
  * @param  {function} callback function when the network information was ready
  * @return {undefined}
  */
  this.init = function(callbackFunction){
    this.network_info.setInformation(callbackFunction);
  }


  /**
   * runTest - Start the Speed test
   *
   * @param  {function} on progress function. For loading stuff
   * @return {undefined}
   */
  this.runTest = function(onProgressFunction){
    this.speed_test.startSpeedTest(onProgressFunction);
  }


  /**
   * sendData - Send all the data to the server
   *
   * @return {undefined}
   */
  this.sendData = function(){
    var information = JSON.stringify(this);
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


  /**
   * getNetworkInfo - Return the NetworkInformation object
   *
   * @return {NetworkInformation}  Inner NetworkInformation object
   */
  this.getNetworkInfo = function(){
    return this.network_info;
  }

  /**
   * getSpeedTest - Return the SpeedTest object
   *
   * @return {SpeedTest}  Inner SpeedTest object
   */
  this.getSpeedTest = function(){
    return this.speed_test;
  }

}
