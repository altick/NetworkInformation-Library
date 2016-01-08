const file = "http://michotastico.github.io/assets/images/space.jpg";
var self;
function write(where, what){
  document.getElementById(where).innerHTML = document.getElementById(where).innerHTML + what;
}

function NIJS(where){
  this.speed_result = null;
  this.network_info = null;
  this.total_time = 0;
  this.where = where;

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
    return this.network_info.city;
  }

  this.country = function(){
    return this.network_info.country;
  }

  this.countryCode = function(){
    return this.network_info.countryCode;
  }

  this.isp = function(){
    return this.network_info.isp;
  }

  this.latlon = function(){
    return [this.network_info.lat, this.network_info.lon];
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
    return this.network_info.regionName;
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
    var _MB = this.speed_result.dataSizeKB/1000;
    var _speed = (_MB/this.total_time)*8;
    return _speed;
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
    var _MB = timings.dataSizeKB/1000;
    var _speed =  (_MB/_time)*8;
    var where = self.where;
    write(where,"\nEl proceso demoró " + _time + " segundos utilizando un archivo de " + _MB +" MB");
    write(where,"\nDando así una velocidad de bajada de " + _speed + " Mbps");
    write(where,"\nLatencia : " + timings.latency);
    write(where,"\nLa latencia es equivalente a una conexión del tipo: " + timings.latencySpeedClass.name);
    write(where,"\nThroughput : " + timings.throughput);
    write(where,"\nThroughPut equivalente a una conexión del tipo : " + timings.throughPutSpeedClass.name);
    self.speed_result = timings;
    self.total_time = _time;
  }

  this.speedTest = function(){
    //Console logs
    write("header","Iniciando detección\n");
    function loadingbar(_where, percentage){
      var bar = "(";
      for (var i = 0; i < percentage ; i ++){
        bar = bar + "|";
      }
      for (var i = percentage; i < 100 ; i++){
        bar = bar + "_";
      }
      bar = bar + ")";
      document.getElementById(_where).innerHTML = bar;
    }
    var onprogress = function c(evt){
      if (evt.lengthComputable)
      {
        var percentComplete = (evt.loaded / evt.total)*100;
        loadingbar("loading",percentComplete);
      }
    }

    detectSpeed.startSpeedCheck(file, this.callback, onprogress);
  }
}
