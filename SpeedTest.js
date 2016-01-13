function SpeedTest(file_url){
  this.downloadSpeed = 0;
  this.testTime = 1;
  this.testResult = null;
  this.file = file_url;

  this.getDownloadSpeed = function(){
    if(this.downloadSpeed === 0){
      var _MB = this.testResult.dataSizeKB/1000;
      var _speed = (_MB/this.testTime)*8;
      this.downloadSpeed = _speed;
    }
    return this.downloadSpeed;
  }

  this.getLatency = function(){
    return this.testResult.latency;
  }

  this.getLatencyType = function(){
    return this.testResult.latencySpeedClass.name;
  }

  this.getThroughput = function(){
    return this.testResult.throughput;
  }

  this.getThroughputType = function(){
    return this.testResult.throughPutSpeedClass.name;
  }

  this.getTestTime = function(){
    return this.testTime;
  }

  this.startSpeedTest = function(onprogress){
    var selfTest = this;
    callback = function(timings){
      var _time = (timings.end - timings.start)/1000;
      selfTest.testResult = timings;
      selfTest.testTime = _time;
      selfTest.getDownloadSpeed();
    }
    detectSpeed.startSpeedCheck(this.file, callback, onprogress);
  }
}
