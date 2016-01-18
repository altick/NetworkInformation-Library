/**
* @file Class who use {@link NetworkInformation} and {@link SpeedTest} to collect and analyse client network data.
* @author [Michel Llorens]{@link http://michotastico.github.io}
* @version 1.0.0
* @license MIT
*/


/**
* Heimdal - Main class who administrate the use of NetworkInformation & SpeedTest classes
* @class Heimdal
* @classdesc Main class who administrate the use of NetworkInformation & SpeedTest classes
*
* @param  {string} server URL of the server where the JSON will be send
*/
function Heimdal(server){
  this.server_url = server || 'http://localhost/';
  this.network_info = new NetworkInformation();
  this.speed_test = [];
  this.time = Date.Now();


  /**
  * init - Call to NetworkInformation to init his params and execute the
  * callback function
  *
  * @memberof! Heimdal
  * @param  {function} callback function when the network information was ready
  * @return {undefined}
  */
  this.init = function(callbackFunction){
    this.network_info.setInformation(callbackFunction);
  }


  /**
   * runTest - Start the Speed test
   *
   * @memberof! Heimdal
   * @param  {function} on progress function. For loading stuff
   * @param  {file} file used in the test
   * @return {undefined}
   */
  this.runTest = function(onProgressFunction, file){
    var speed_test = new SpeedTest(file);
    this.speed_test.push(speed_test);
    speed_test.startSpeedTest(onProgressFunction);
  }


  /**
   * sendData - Send all the data to the server
   *
   * @memberof! Heimdal
   * @return {undefined}
   */
  this.sendData = function(){
    this.time = Date.Now();
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
   * @memberof! Heimdal
   * @return {NetworkInformation}  Inner NetworkInformation object
   */
  this.getNetworkInfo = function(){
    return this.network_info;
  }

  /**
   * getSpeedTests - Return the SpeedTest object
   * @memberof! Heimdal
   * @return {SpeedTest}  Inner SpeedTest object
   */
  this.getSpeedTests = function(){
    return this.speed_test;
  }

}
