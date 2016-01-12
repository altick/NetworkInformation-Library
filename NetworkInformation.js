var selfNetwork = null;

function NetworkInformation(){
  selfNetwork = this;
  this.googleInformation = null;
  this.ipApiInformation = null;
  this.currentOs = "Unknown";
  this.networkType = "Unknown";
  this.coordinates = [0, 0];

  this.getGoogleInfo = function(lat, lon){
    try{
      var geocoder;
      geocoder = new google.maps.Geocoder();
      var latlng = new google.maps.LatLng(lat, lon);

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
        }
      );
    }
    catch(err){
      ;
    }
  }

  this.getHtml5Geolocation = function(tail_method, callbackfunction){
    var success = function(data){
      selfNetwork.coordinates = [data.coords.latitude, data.coords.longitude];
      if(selfNetwork.coordinates[0] != 0 && selfNetwork.coordinates[1] != 0){
        selfNetwork.getGoogleInfo(data.coords.latitude, data.coords.longitude);
      }
      tail_method(callbackfunction);
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

  this.getIpApiInformation = function(callbackfunction){
    var setData = function(data){
      selfNetwork.ipApiInformation = data;
      callbackfunction();
    }
    $.getJSON("http://ip-api.com/json/?callback=?&lang=es&fields=262111", setData);
  }

  this.setInformation = function(readyMethod){
    this.getHtml5Geolocation(this.getIpApiInformation, readyMethod);
    setTimeout(function () {
      if(selfNetwork.googleInformation == null){
        window.console.log("No hubo confirmación o se declinó.");
        selfNetwork.getIpApiInformation(readyMethod);
      }else{
        window.console.log("Localización exitosa.");
      }
    }, 11000);
  }

  this.getAS = function(){
    return this.ipApiInformation.as;
  }

  this.getCity = function(){
    if(this.googleInformation){
      return this.googleInformation[1];
    }
    else{
      return this.ipApiInformation.city;
    }
  }

  this.getCountry = function(){
    if(this.googleInformation){
      return this.googleInformation[4];
    }
    else{
      return this.ipApiInformation.country;
    }
  }

  this.getCountryCode = function(){
    return this.ipApiInformation.countryCode;
  }

  this.getIsp = function(){
    return this.ipApiInformation.isp;
  }

  this.getCoordinates = function(){
    if(this.coordinates[0] === 0 && this.coordinates[1] === 0){
      this.coordinates = [this.ipApiInformation.lat, this.ipApiInformation.lon];
    }
    return this.coordinates;
  }

  this.getOrganization = function(){
    return this.ipApiInformation.org;
  }

  this.useProxy = function(){
    var countryIpAPi = this.ipApiInformation.country;
    countryIpAPi = (countryIpAPi.toLowerCase()).trim();
    var countryGoogle = this.googleInformation[4];
    countryGoogle = (countryGoogle.toLowerCase()).trim();
    if(countryIpAPi === countryGoogle){
      return false;
    }
    else {
      return true;
    }
  }

  this.getIp = function(){
    return this.ipApiInformation.query;
  }

  this.getRegion = function(){
    if(this.googleInformation){
      return this.googleInformation[3];
    }
    else{
      return this.ipApiInformation.region;
    }
  }

  this.getRegionName = function(){
    if(this.googleInformation){
      return this.googleInformation[3];
    }
    else{
      return this.ipApiInformation.regionName;
    }
  }

  this.getReverseDNS = function(){
    return this.ipApiInformation.reverse;
  }

  this.isSuccessful = function(){
    if(this.ipApiInformation.status == "success"){
      return true;
    }
    else{
      return false;
    }
  }

  this.getTimezone = function(){
    return this.ipApiInformation.timezone;
  }

  this.isAndroid = function(){
    return /Android/i.test(navigator.userAgent);
  }

  this.isMobile = function(){
    var device = navigator.userAgent;
    return /Android|BlackBerry|iPhone|iPad|iPod|IEMobile/i.test(device);
  }

  this.checkConnectionType = function(){
    var connection =  navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    if(connection == undefined){
      return "Unknown";
    }
    else{
      return connection.type;
    }
  }

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
