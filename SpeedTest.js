var selfTest = null;

function SpeedTest(file_url){
  selfTest = this;
  this.download_result = 0;
  this.test_time = 1;
  this.testResult = null;
  this.file = file_url;

  this.getDownloadSpeed = function(){
    if(this.download_result === 0){
      var _MB = this.testResult.dataSizeKB/1000;
      var _speed = (_MB/this.test_time)*8;
      this.download_result = _speed;
    }
    return this.download_result;
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

  this.getTthroughputType = function(){
    return this.testResult.throughPutSpeedClass.name;
  }

  this.callback = function(timings){
    var _time = (timings.end - timings.start)/1000;
    selfTest.testResult = timings;
    selfTest.test_time = _time;
    selfTest.getDownloadSpeed();
  }

  this.speedTest = function(onprogress){
    detectSpeed.startSpeedCheck(this.file, this.callback, onprogress);
  }
}
