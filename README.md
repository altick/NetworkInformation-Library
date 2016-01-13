## Classes

<dl>
<dt><a href="#Heimdal">Heimdal</a></dt>
<dd><p>Main class who administrate the use of NetworkInformation &amp; SpeedTest classes</p>
</dd>
<dt><a href="#NetworkInformation">NetworkInformation</a></dt>
<dd><p>Class who get the information of the client network</p>
</dd>
<dt><a href="#SpeedTest">SpeedTest</a></dt>
<dd><p>Class in charge of make Speed Tests</p>
</dd>
</dl>

<a name="Heimdal"></a>
## Heimdal
Main class who administrate the use of NetworkInformation & SpeedTest classes

**Kind**: global class  

* [Heimdal](#Heimdal)
    * [new Heimdal(file, server)](#new_Heimdal_new)
    * [.this.init(callback)](#Heimdal.this.init) ⇒ <code>undefined</code>
    * [.this.runTest(on)](#Heimdal.this.runTest) ⇒ <code>undefined</code>
    * [.this.sendData()](#Heimdal.this.sendData) ⇒ <code>undefined</code>
    * [.this.getNetworkInfo()](#Heimdal.this.getNetworkInfo) ⇒ <code>[NetworkInformation](#NetworkInformation)</code>
    * [.this.getSpeedTest()](#Heimdal.this.getSpeedTest) ⇒ <code>[SpeedTest](#SpeedTest)</code>

<a name="new_Heimdal_new"></a>
### new Heimdal(file, server)
Heimdal - Main class who administrate the use of NetworkInformation & SpeedTest classes


| Param | Type | Description |
| --- | --- | --- |
| file | <code>string</code> | URL of the file to be used in the SpeedTest |
| server | <code>string</code> | URL of the server where the JSON will be send |

<a name="Heimdal.this.init"></a>
### Heimdal.this.init(callback) ⇒ <code>undefined</code>
init - Call to NetworkInformation to init his params and execute the
callback function

**Kind**: static method of <code>[Heimdal](#Heimdal)</code>  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | function when the network information was ready |

<a name="Heimdal.this.runTest"></a>
### Heimdal.this.runTest(on) ⇒ <code>undefined</code>
runTest - Start the Speed test

**Kind**: static method of <code>[Heimdal](#Heimdal)</code>  

| Param | Type | Description |
| --- | --- | --- |
| on | <code>function</code> | progress function. For loading stuff |

<a name="Heimdal.this.sendData"></a>
### Heimdal.this.sendData() ⇒ <code>undefined</code>
sendData - Send all the data to the server

**Kind**: static method of <code>[Heimdal](#Heimdal)</code>  
<a name="Heimdal.this.getNetworkInfo"></a>
### Heimdal.this.getNetworkInfo() ⇒ <code>[NetworkInformation](#NetworkInformation)</code>
getNetworkInfo - Return the NetworkInformation object

**Kind**: static method of <code>[Heimdal](#Heimdal)</code>  
**Returns**: <code>[NetworkInformation](#NetworkInformation)</code> - Inner NetworkInformation object  
<a name="Heimdal.this.getSpeedTest"></a>
### Heimdal.this.getSpeedTest() ⇒ <code>[SpeedTest](#SpeedTest)</code>
getSpeedTest - Return the SpeedTest object

**Kind**: static method of <code>[Heimdal](#Heimdal)</code>  
**Returns**: <code>[SpeedTest](#SpeedTest)</code> - Inner SpeedTest object  
<a name="NetworkInformation"></a>
## NetworkInformation
Class who get the information of the client network

**Kind**: global class  

* [NetworkInformation](#NetworkInformation)
    * [new NetworkInformation()](#new_NetworkInformation_new)
    * [.this.getGoogleInfo(lat, lon)](#NetworkInformation.this.getGoogleInfo) ⇒ <code>undefined</code>
    * [.this.setInformation(readyMethod)](#NetworkInformation.this.setInformation) ⇒ <code>undefined</code>
        * [~getHtml5Geolocation(tail_method, callbackfunction)](#NetworkInformation.this.setInformation..getHtml5Geolocation) ⇒ <code>undefined</code>
        * [~getIpApiInformation(callbackfunction)](#NetworkInformation.this.setInformation..getIpApiInformation) ⇒ <code>undefined</code>
    * [.this.getAS()](#NetworkInformation.this.getAS) ⇒ <code>string</code>
    * [.this.getCity()](#NetworkInformation.this.getCity) ⇒ <code>string</code>
    * [.this.getCountry()](#NetworkInformation.this.getCountry) ⇒ <code>string</code>
    * [.this.getCountryCode()](#NetworkInformation.this.getCountryCode) ⇒ <code>string</code>
    * [.this.getIsp()](#NetworkInformation.this.getIsp) ⇒ <code>string</code>
    * [.this.getCoordinates()](#NetworkInformation.this.getCoordinates) ⇒ <code>Array</code>
    * [.this.getOrganization()](#NetworkInformation.this.getOrganization) ⇒ <code>string</code>
    * [.this.useProxy()](#NetworkInformation.this.useProxy) ⇒ <code>boolean</code>
    * [.this.getIp()](#NetworkInformation.this.getIp) ⇒ <code>string</code>
    * [.this.getRegion()](#NetworkInformation.this.getRegion) ⇒ <code>string</code>
    * [.this.getRegionName()](#NetworkInformation.this.getRegionName) ⇒ <code>string</code>
    * [.this.getReverseDNS()](#NetworkInformation.this.getReverseDNS) ⇒ <code>string</code>
    * [.this.isSuccessful()](#NetworkInformation.this.isSuccessful) ⇒ <code>boolean</code>
    * [.this.getTimezone()](#NetworkInformation.this.getTimezone) ⇒ <code>string</code>
    * [.this.isAndroid()](#NetworkInformation.this.isAndroid) ⇒ <code>boolean</code>
    * [.this.isMobile()](#NetworkInformation.this.isMobile) ⇒ <code>boolean</code>
    * [.this.checkConnectionType()](#NetworkInformation.this.checkConnectionType) ⇒ <code>string</code>
    * [.this.getOS()](#NetworkInformation.this.getOS) ⇒ <code>string</code>

<a name="new_NetworkInformation_new"></a>
### new NetworkInformation()
NetworkInformation - Class who get the information of the client network

<a name="NetworkInformation.this.getGoogleInfo"></a>
### NetworkInformation.this.getGoogleInfo(lat, lon) ⇒ <code>undefined</code>
getGoogleInfo - receive the data from google and set in the internal vars

**Kind**: static method of <code>[NetworkInformation](#NetworkInformation)</code>  

| Param | Type | Description |
| --- | --- | --- |
| lat | <code>number</code> | latitude |
| lon | <code>number</code> | longitude |

<a name="NetworkInformation.this.setInformation"></a>
### NetworkInformation.this.setInformation(readyMethod) ⇒ <code>undefined</code>
setInformation - Set all the information to the class. Requesting to the navigator, google and ip-api

**Kind**: static method of <code>[NetworkInformation](#NetworkInformation)</code>  

| Param | Type | Description |
| --- | --- | --- |
| readyMethod | <code>function</code> | function called when the information was setted |


* [.this.setInformation(readyMethod)](#NetworkInformation.this.setInformation) ⇒ <code>undefined</code>
    * [~getHtml5Geolocation(tail_method, callbackfunction)](#NetworkInformation.this.setInformation..getHtml5Geolocation) ⇒ <code>undefined</code>
    * [~getIpApiInformation(callbackfunction)](#NetworkInformation.this.setInformation..getIpApiInformation) ⇒ <code>undefined</code>

<a name="NetworkInformation.this.setInformation..getHtml5Geolocation"></a>
#### this.setInformation~getHtml5Geolocation(tail_method, callbackfunction) ⇒ <code>undefined</code>
getHtml5Geolocation - get the geolocalitation from the navigator

**Kind**: inner method of <code>[this.setInformation](#NetworkInformation.this.setInformation)</code>  

| Param | Type | Description |
| --- | --- | --- |
| tail_method | <code>function</code> | next function to be called. |
| callbackfunction | <code>function</code> | callback function |

<a name="NetworkInformation.this.setInformation..getIpApiInformation"></a>
#### this.setInformation~getIpApiInformation(callbackfunction) ⇒ <code>undefined</code>
getIpApiInformation - get the network information from ip-api

**Kind**: inner method of <code>[this.setInformation](#NetworkInformation.this.setInformation)</code>  

| Param | Type | Description |
| --- | --- | --- |
| callbackfunction | <code>function</code> | callback function |

<a name="NetworkInformation.this.getAS"></a>
### NetworkInformation.this.getAS() ⇒ <code>string</code>
getAS - Get Autonomous system

**Kind**: static method of <code>[NetworkInformation](#NetworkInformation)</code>  
**Returns**: <code>string</code> - Autonomous system  
<a name="NetworkInformation.this.getCity"></a>
### NetworkInformation.this.getCity() ⇒ <code>string</code>
getCity - Get city

**Kind**: static method of <code>[NetworkInformation](#NetworkInformation)</code>  
**Returns**: <code>string</code> - city  
<a name="NetworkInformation.this.getCountry"></a>
### NetworkInformation.this.getCountry() ⇒ <code>string</code>
getCountry - Get country

**Kind**: static method of <code>[NetworkInformation](#NetworkInformation)</code>  
**Returns**: <code>string</code> - country  
<a name="NetworkInformation.this.getCountryCode"></a>
### NetworkInformation.this.getCountryCode() ⇒ <code>string</code>
getCountryCode - Get country code

**Kind**: static method of <code>[NetworkInformation](#NetworkInformation)</code>  
**Returns**: <code>string</code> - country code  
<a name="NetworkInformation.this.getIsp"></a>
### NetworkInformation.this.getIsp() ⇒ <code>string</code>
getIsp - Get the ISP

**Kind**: static method of <code>[NetworkInformation](#NetworkInformation)</code>  
**Returns**: <code>string</code> - ISP  
<a name="NetworkInformation.this.getCoordinates"></a>
### NetworkInformation.this.getCoordinates() ⇒ <code>Array</code>
getCoordinates - Get Latlong of client.

**Kind**: static method of <code>[NetworkInformation](#NetworkInformation)</code>  
**Returns**: <code>Array</code> - [Latitude, Longitude]  
<a name="NetworkInformation.this.getOrganization"></a>
### NetworkInformation.this.getOrganization() ⇒ <code>string</code>
getOrganization - Get organization (or ISP if didn't exists)

**Kind**: static method of <code>[NetworkInformation](#NetworkInformation)</code>  
**Returns**: <code>string</code> - organization  
<a name="NetworkInformation.this.useProxy"></a>
### NetworkInformation.this.useProxy() ⇒ <code>boolean</code>
useProxy - Check if the user use a proxy

**Kind**: static method of <code>[NetworkInformation](#NetworkInformation)</code>  
**Returns**: <code>boolean</code> - True if the user use a proxy  
<a name="NetworkInformation.this.getIp"></a>
### NetworkInformation.this.getIp() ⇒ <code>string</code>
getIp - Get IP

**Kind**: static method of <code>[NetworkInformation](#NetworkInformation)</code>  
**Returns**: <code>string</code> - IP  
<a name="NetworkInformation.this.getRegion"></a>
### NetworkInformation.this.getRegion() ⇒ <code>string</code>
getRegion - Get region

**Kind**: static method of <code>[NetworkInformation](#NetworkInformation)</code>  
**Returns**: <code>string</code> - Region  
<a name="NetworkInformation.this.getRegionName"></a>
### NetworkInformation.this.getRegionName() ⇒ <code>string</code>
getRegionName - Get region's name

**Kind**: static method of <code>[NetworkInformation](#NetworkInformation)</code>  
**Returns**: <code>string</code> - Region's name  
<a name="NetworkInformation.this.getReverseDNS"></a>
### NetworkInformation.this.getReverseDNS() ⇒ <code>string</code>
getReverseDNS - Get the reverse of the DNS

**Kind**: static method of <code>[NetworkInformation](#NetworkInformation)</code>  
**Returns**: <code>string</code> - Reverse of the DNS  
<a name="NetworkInformation.this.isSuccessful"></a>
### NetworkInformation.this.isSuccessful() ⇒ <code>boolean</code>
isSuccessful - Check if the connection was successful

**Kind**: static method of <code>[NetworkInformation](#NetworkInformation)</code>  
**Returns**: <code>boolean</code> - True if the connection was successful  
<a name="NetworkInformation.this.getTimezone"></a>
### NetworkInformation.this.getTimezone() ⇒ <code>string</code>
getTimezone - Get timezone

**Kind**: static method of <code>[NetworkInformation](#NetworkInformation)</code>  
**Returns**: <code>string</code> - Timezone  
<a name="NetworkInformation.this.isAndroid"></a>
### NetworkInformation.this.isAndroid() ⇒ <code>boolean</code>
isAndroid - Check if the device is Android

**Kind**: static method of <code>[NetworkInformation](#NetworkInformation)</code>  
**Returns**: <code>boolean</code> - True if the device is Android  
<a name="NetworkInformation.this.isMobile"></a>
### NetworkInformation.this.isMobile() ⇒ <code>boolean</code>
isMobile - Check if the device is mobile

**Kind**: static method of <code>[NetworkInformation](#NetworkInformation)</code>  
**Returns**: <code>boolean</code> - True if the device is mobile  
<a name="NetworkInformation.this.checkConnectionType"></a>
### NetworkInformation.this.checkConnectionType() ⇒ <code>string</code>
checkConnectionType - If its avalaible, check the connection type. (Only work on Android)

**Kind**: static method of <code>[NetworkInformation](#NetworkInformation)</code>  
**Returns**: <code>string</code> - Connection Type  
<a name="NetworkInformation.this.getOS"></a>
### NetworkInformation.this.getOS() ⇒ <code>string</code>
getOS - Get the OS of the client

**Kind**: static method of <code>[NetworkInformation](#NetworkInformation)</code>  
**Returns**: <code>string</code> - Operative System  
<a name="SpeedTest"></a>
## SpeedTest
Class in charge of make Speed Tests

**Kind**: global class  

* [SpeedTest](#SpeedTest)
    * [new SpeedTest(file_url)](#new_SpeedTest_new)
    * [.this.getDownloadSpeed()](#SpeedTest.this.getDownloadSpeed) ⇒ <code>number</code>
    * [.this.getLatency()](#SpeedTest.this.getLatency) ⇒ <code>number</code>
    * [.this.getLatencyType()](#SpeedTest.this.getLatencyType) ⇒ <code>string</code>
    * [.this.getThroughput()](#SpeedTest.this.getThroughput) ⇒ <code>number</code>
    * [.this.getThroughputType()](#SpeedTest.this.getThroughputType) ⇒ <code>string</code>
    * [.this.getTestTime()](#SpeedTest.this.getTestTime) ⇒ <code>number</code>
    * [.this.startSpeedTest(onprogress)](#SpeedTest.this.startSpeedTest) ⇒ <code>undefined</code>

<a name="new_SpeedTest_new"></a>
### new SpeedTest(file_url)
SpeedTest - Class in charge of make Speed Tests


| Param | Type | Description |
| --- | --- | --- |
| file_url | <code>string</code> | URL of the file used in the download speed test |

<a name="SpeedTest.this.getDownloadSpeed"></a>
### SpeedTest.this.getDownloadSpeed() ⇒ <code>number</code>
getDownloadSpeed - Get the download speed

**Kind**: static method of <code>[SpeedTest](#SpeedTest)</code>  
**Returns**: <code>number</code> - download speed  
<a name="SpeedTest.this.getLatency"></a>
### SpeedTest.this.getLatency() ⇒ <code>number</code>
getLatency - Get the latency

**Kind**: static method of <code>[SpeedTest](#SpeedTest)</code>  
**Returns**: <code>number</code> - latency  
<a name="SpeedTest.this.getLatencyType"></a>
### SpeedTest.this.getLatencyType() ⇒ <code>string</code>
getLatencyType - Get the equivalence of latency

**Kind**: static method of <code>[SpeedTest](#SpeedTest)</code>  
**Returns**: <code>string</code> - Latency speed class name  
<a name="SpeedTest.this.getThroughput"></a>
### SpeedTest.this.getThroughput() ⇒ <code>number</code>
getThroughput - Get the throughput

**Kind**: static method of <code>[SpeedTest](#SpeedTest)</code>  
**Returns**: <code>number</code> - throughput  
<a name="SpeedTest.this.getThroughputType"></a>
### SpeedTest.this.getThroughputType() ⇒ <code>string</code>
getThroughputType - Get the equivalenceof throughput

**Kind**: static method of <code>[SpeedTest](#SpeedTest)</code>  
**Returns**: <code>string</code> - Throughput speed class name  
<a name="SpeedTest.this.getTestTime"></a>
### SpeedTest.this.getTestTime() ⇒ <code>number</code>
getTestTime - Get the total time of the test

**Kind**: static method of <code>[SpeedTest](#SpeedTest)</code>  
**Returns**: <code>number</code> - duration of test  
<a name="SpeedTest.this.startSpeedTest"></a>
### SpeedTest.this.startSpeedTest(onprogress) ⇒ <code>undefined</code>
startSpeedTest - start the speed test

**Kind**: static method of <code>[SpeedTest](#SpeedTest)</code>  

| Param | Type | Description |
| --- | --- | --- |
| onprogress | <code>function</code> | on progress function |

