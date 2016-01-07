"use strict";
const file = "http://michotastico.github.io/assets/images/space.jpg";
var self;
function write(where, what){
  document.getElementById(where).innerHTML = document.getElementById(where).innerHTML + what;
}

class Nijs{
  constructor(_where){
    this.speed_result = null;
    this.network_info = null;
    this.total_time = 0;
    this.where = _where;
    self = this;
  }


  receiveData(){
    var setData = function(data){
      self.network_info = data;
    }
    $.getJSON("http://ip-api.com/json/?callback=?&lang=es&fields=262111", setData);
  }

  get getAS(){
    return this.network_info.as;
  }

  get city(){
    return this.network_info.city;
  }

  get country(){
    return this.network_info.country;
  }

  get countryCode(){
    return this.network_info.countryCode;
  }

  get isp(){
    return this.network_info.isp;
  }

  get latlon(){
    return [this.network_info.lat, this.network_info.lon];
  }

  get isMobile(){
    return this.network_info.mobile;
  }

  get organization(){
    return this.network_info.org;
  }

  get useProxy(){
    return this.network_info.proxy;
  }

  get ip(){
    return this.network_info.query;
  }

  get region(){
    return this.network_info.region;
  }

  get regionName(){
    return this.network_info.regionName;
  }

  get reverseDNS(){
    return this.network_info.reverse;
  }

  get isSuccessful(){
    if(this.network_info.status == "success"){
      return true;
    }
    else{
      return false;
    }
  }

  get timezone(){
    return this.network_info.timezone;
  }

  setSpeedResult(result){
    this.speed_result = result;
  }

  get downloadSpeed(){
    var _MB = this.speed_result.dataSizeKB/1000;
    var _speed = (_MB/this.total_time)*8;
    return _speed;
  }

  get latency(){
    return this.speed_result.latency;
  }

  get latencyType(){
    return this.speed_result.latencySpeedClass.name;
  }

  get throughput(){
    return this.speed_result.throughput;
  }

  get throughputType(){
    return this.speed_result.throughPutSpeedClass.name;
  }

  callback(timings){
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

  speedTest(){
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
