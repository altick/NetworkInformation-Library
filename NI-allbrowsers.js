const file = "http://michotastico.github.io/assets/images/space.jpg";
var self = null;

function NIJS(){
  this.speed_result = null;
  this.network_info = null;
  this.total_time = 0;
  this.current_speed = 0; //Mbps
  this.latlon_coords = [0, 0];
  this.dataFromGoogle = false;
  self = this;

  this.fromGoogle = function(lat, lon){
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
              self.dataFromGoogle = value;
            }
          }
        }
      );
    }
    catch(err){
      ;
    }
  }

  this.askLatlon = function(ploting_method){
    var setLatlon = function(data){
      ploting_method(data.coords.latitude, data.coords.longitude);
      self.latlon_coords = [data.coords.latitude, data.coords.longitude];
      if(self.latlon_coords[0] != 0 && self.latlon_coords[1] != 0){
        self.fromGoogle(data.coords.latitude, data.coords.longitude);}
      }
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(setLatlon);
      }
    }

    this.receiveData = function(callbackfunction){
      var setData = function(data){
        self.network_info = data;
        callbackfunction();
      }
      $.getJSON("http://ip-api.com/json/?callback=?&lang=es&fields=262111", setData);
    }

    this.getAS = function(){
      return this.network_info.as;
    }

    this.city = function(){
      if(this.dataFromGoogle){
        return this.dataFromGoogle[1];
      }
      else{
        return this.network_info.city;
      }
    }

    this.country = function(){
      if(this.dataFromGoogle){
        return this.dataFromGoogle[4];
      }
      else{
        return this.network_info.country;
      }
    }

    this.countryCode = function(){
      return this.network_info.countryCode;
    }

    this.isp = function(){
      return this.network_info.isp;
    }

    this.latlon = function(){
      if(this.latlon_coords[0] === 0 && this.latlon_coords[1] === 0){
        this.latlon_coords = [this.network_info.lat, this.network_info.lon];
      }
      return this.latlon_coords;
    }

    this.isMobile = function(){
      return this.network_info.mobile;
    }

    this.organization = function(){
      return this.network_info.org;
    }

    this.useProxy = function(){
      return this.network_info.proxy;
    }

    this.ip = function(){
      return this.network_info.query;
    }

    this.region = function(){
      return this.network_info.region;
    }

    this.regionName = function(){
      if(this.dataFromGoogle){
        return this.dataFromGoogle[3];
      }
      else{
        return this.network_info.regionName;
      }
    }

    this.reverseDNS = function(){
      return this.network_info.reverse;
    }

    this.isSuccessful = function(){
      if(this.network_info.status == "success"){
        return true;
      }
      else{
        return false;
      }
    }

    this.timezone = function(){
      return this.network_info.timezone;
    }

    this.setSpeedResult = function(result){
      this.speed_result = result;
    }

    this.downloadSpeed = function(){
      if(this.current_speed === 0){
        var _MB = this.speed_result.dataSizeKB/1000;
        var _speed = (_MB/this.total_time)*8;
        this.current_speed = _speed;
      }
      return this.current_speed;
    }

    this.latency = function(){
      return this.speed_result.latency;
    }

    this.latencyType = function(){
      return this.speed_result.latencySpeedClass.name;
    }

    this.throughput = function(){
      return this.speed_result.throughput;
    }

    this.throughputType = function(){
      return this.speed_result.throughPutSpeedClass.name;
    }

    this.callback = function(timings){
      var _time = (timings.end - timings.start)/1000;
      self.speed_result = timings;
      self.total_time = _time;
    }

    this.speedTest = function(onprogress){
      detectSpeed.startSpeedCheck(file, this.callback, onprogress);
    }
  }
