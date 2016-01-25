/**
* @file Class who collect client network information using two different API for precision.
* @author [Michel Llorens]{@link http://michotastico.github.io}
* @version 1.0.0
* @license MIT
*/


/**
* NetworkInformation - Class who get the information of the client network
* @class NetworkInformation
* @classdesc Class who get the information of the client network
*
*/
function NetworkInformation(){
  this.googleInformation = null;
  this.ipApiInformation = null;
  this.currentOs = "Unknown";
  this.networkType = "Unknown";
  this.coordinates = [0, 0];
  this.proxy = false;

  /**
  * getGoogleInfo - receive the data from google and set in the internal vars
  *
  * @memberof! NetworkInformation
  * @param  {function} tail The tail function.
  * @param  {function} callback The callback function.
  * @param  {number} lat latitude
  * @param  {number} lon longitude
  * @return {undefined}
  */
  this.getGoogleInfo = function(tail, callback, lat, lon){
    var wasCalled = false;
    try{
      var geocoder;
      geocoder = new google.maps.Geocoder();
      var latlng = new google.maps.LatLng(lat, lon);
      var selfNetwork = this;
      geocoder.geocode(
        {'latLng': latlng},
        function(results, status) {
          if (status == google.maps.GeocoderStatus.OK) {
            if (results[0]) {
              var add= results[0].formatted_address ;
              var  value=add.split(",");
              selfNetwork.googleInformation = value;
            }
          }
          wasCalled = true;
          tail(callback);
        }
      );
    }
    catch(err){
      if(!wasCalled){
        tail(callback);
      }
    }
  }

  /**
  * setInformation - Set all the information to the class. Requesting to the navigator, google and ip-api
  *
  * @memberof! NetworkInformation
  * @param  {function} readyMethod function called when the information was setted
  * @return {undefined}
  */
  this.setInformation = function(readyMethod){
    var selfNetwork = this;

    /**
    * getHtml5Geolocation - get the geolocalitation from the navigator
    *
    * @param  {function} tail_method      next function to be called.
    * @param  {function} callbackfunction callback function
    * @return {undefined}
    */
    getHtml5Geolocation = function(tail_method, callbackfunction){
      var success = function(data){
        selfNetwork.coordinates = [data.coords.latitude, data.coords.longitude];
        if(selfNetwork.coordinates[0] != 0 && selfNetwork.coordinates[1] != 0){
          selfNetwork.getGoogleInfo(tail_method, callbackfunction, data.coords.latitude, data.coords.longitude);
        }
        else {
          tail_method(callbackfunction);
        }
      }
      var failure = function(data){
        tail_method(callbackfunction);
      }
      var geo_options = {
        enableHighAccuracy: true,
        maximumAge        : 10000,
        timeout           : 17000
      };
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, failure, geo_options);
      }
      else{
        tail_method(callbackfunction);
      }
    }

    /**
    * getIpApiInformation - get the network information from ip-api
    *
    * @param  {function} callbackfunction callback function
    * @return {undefined}
    */
    getIpApiInformation = function(callbackfunction){
      var setData = function(data){
        selfNetwork.ipApiInformation = data;
        callbackfunction();
      }
      $.getJSON(IP_API_URL, setData);
    }


    getHtml5Geolocation(getIpApiInformation, readyMethod);

    /**
    * anonymous function - Timeout to call getIpApiInformation function because a bug in navigator.geolocation.getCurrentPosition method
    *
    * @return {undefined}
    */
    setTimeout(function () {
      if(selfNetwork.googleInformation == null && selfNetwork.ipApiInformation == null){
        window.console.log("No hubo confirmación o se declinó.");
        getIpApiInformation(readyMethod);
      }else{
        window.console.log("Localización exitosa.");
      }
    }, 18000);
  }

  /**
  * getAS - Get Autonomous system
  *
  * @memberof! NetworkInformation
  * @return {string}  Autonomous system
  */
  this.getAS = function(){
    return this.ipApiInformation.as;
  }

  /**
  * getCity - Get city
  *
  * @memberof! NetworkInformation
  * @return {string}  city
  */
  this.getCity = function(){
    if(this.googleInformation){
      return this.googleInformation[1];
    }
    else{
      return this.ipApiInformation.city;
    }
  }

  /**
  * getCountry - Get country
  *
  * @memberof! NetworkInformation
  * @return {string} country
  */
  this.getCountry = function(){
    if(this.googleInformation){
      return this.googleInformation[4];
    }
    else{
      return this.ipApiInformation.country;
    }
  }

  /**
  * getCountryCode - Get country code
  *
  * @memberof! NetworkInformation
  * @return {string} country code
  */
  this.getCountryCode = function(){
    return this.ipApiInformation.countryCode;
  }

  /**
  * getIsp - Get the ISP
  *
  * @memberof! NetworkInformation
  * @return {string} ISP
  */
  this.getIsp = function(){
    return this.ipApiInformation.isp;
  }

  /**
  * getCoordinates - Get Latlong of client.
  *
  * @memberof! NetworkInformation
  * @return {Array}  [Latitude, Longitude]
  */
  this.getCoordinates = function(){
    if(this.coordinates[0] === 0 && this.coordinates[1] === 0){
      this.coordinates = [this.ipApiInformation.lat, this.ipApiInformation.lon];
    }
    return this.coordinates;
  }

  /**
  * getOrganization - Get organization (or ISP if didn't exists)
  *
  * @memberof! NetworkInformation
  * @return {string}  organization
  */
  this.getOrganization = function(){
    return this.ipApiInformation.org;
  }

  /**
  * useProxy - Check if the user use a proxy
  *
  * @memberof! NetworkInformation
  * @return {boolean} True if the user use a proxy
  */
  this.useProxy = function(){
    if(this.googleInformation == null){
      return false;
    }
    var countryIpAPi = this.ipApiInformation.country;
    countryIpAPi = (countryIpAPi.toLowerCase()).trim();
    var countryGoogle = this.googleInformation[4];
    countryGoogle = (countryGoogle.toLowerCase()).trim();
    if(countryIpAPi === countryGoogle){
      return false;
    }
    else {
      this.proxy = true;
      return true;
    }
  }

  /**
  * getIp - Get IP
  *
  * @memberof! NetworkInformation
  * @return {string}  IP
  */
  this.getIp = function(){
    return this.ipApiInformation.query;
  }

  /**
  * getRegion - Get region
  *
  * @memberof! NetworkInformation
  * @return {string}  Region
  */
  this.getRegion = function(){
    if(this.googleInformation){
      return this.googleInformation[3];
    }
    else{
      return this.ipApiInformation.region;
    }
  }

  /**
  * getRegionName - Get region's name
  *
  * @memberof! NetworkInformation
  * @return {string}  Region's name
  */
  this.getRegionName = function(){
    if(this.googleInformation){
      return this.googleInformation[3];
    }
    else{
      return this.ipApiInformation.regionName;
    }
  }

  /**
  * getReverseDNS - Get the reverse of the DNS
  *
  * @memberof! NetworkInformation
  * @return {string}  Reverse of the DNS
  */
  this.getReverseDNS = function(){
    return this.ipApiInformation.reverse;
  }

  /**
  * isSuccessful - Check if the connection was successful
  *
  * @memberof! NetworkInformation
  * @return {boolean}  True if the connection was successful
  */
  this.isSuccessful = function(){
    if(this.ipApiInformation.status == "success"){
      return true;
    }
    else{
      return false;
    }
  }

  /**
  * getTimezone - Get timezone
  *
  * @memberof! NetworkInformation
  * @return {string} Timezone
  */
  this.getTimezone = function(){
    return this.ipApiInformation.timezone;
  }

  /**
  * isAndroid - Check if the device is Android
  *
  * @memberof! NetworkInformation
  * @return {boolean} True if the device is Android
  */
  this.isAndroid = function(){
    return /Android/i.test(navigator.userAgent);
  }

  /**
  * isMobile - Check if the device is mobile
  *
  * @memberof! NetworkInformation
  * @return {boolean} True if the device is mobile
  */
  this.isMobile = function(){
    var device = navigator.userAgent;
    return /Android|BlackBerry|iPhone|iPad|iPod|IEMobile/i.test(device);
  }

  /**
  * checkConnectionType - If its avalaible, check the connection type. (Only work on Android)
  *
  * @memberof! NetworkInformation
  * @return {string}  Connection Type
  */
  this.checkConnectionType = function(){
    var connection =  navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    if(connection == undefined){
      return "Unknown";
    }
    else{
      return connection.type;
    }
  }

  /**
  * getOS - Get the OS of the client
  *
  * @memberof! NetworkInformation
  * @return {string}  Operative System
  */
  this.getOS = function(){
    var os = "Unknown";
    var device = navigator.userAgent;
    if(/Windows/i.test(device)){
      os = "Windows";
    }
    else if (/Linux/i.test(device)) {
      os = "Linux";
    }
    else if(/Mac/i.test(device)){
      os = "Mac";
    }
    else if (this.isMobile()) {
      os = "Mobile";
    }
    else{;}
    return os;
  }


  this.currentOs = this.getOS();
  this.networkType = this.checkConnectionType();


}
