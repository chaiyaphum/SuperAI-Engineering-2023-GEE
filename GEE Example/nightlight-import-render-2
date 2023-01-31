var countryList = ["Thailand"];

var nightlight = ee.ImageCollection("NOAA/VIIRS/DNB/MONTHLY_V1/VCMSLCFG");
var countries = ee.FeatureCollection('USDOS/LSIB_SIMPLE/2017').filter(ee.Filter.inList("country_na", countryList));

Map.addLayer(countries,{},"countries of interest");

var start = ee.Date.fromYMD(2014,1,1);
var end = ee.Date.fromYMD(2014,12,31);
 
var nightlights2014 = nightlight.filterDate(start,end);

nightlights2014 = ee.Image(nightlights2014.mean());

nightlights2014 = nightlights2014.select("avg_rad");

nightlights2014 = nightlights2014.clip(countries);

Map.setCenter(100.57507717373369, 13.867432366904056, 6);

Map.addLayer(nightlights2014,{min:0, max:10, palette:['000000','700000','808080','FFFF00','ffffff','ffffff','ffffff']}, "nightlights 2014");

/*
var start = ee.Date.fromYMD(2021,1,1);
var end = ee.Date.fromYMD(2021,12,31);
 
var nightlights2021 = nightlight.filterDate(start,end);
nightlights2021 = ee.Image(nightlights2021.mean());
nightlights2021 = nightlights2021.select("avg_rad");
nightlights2021 = nightlights2021.clip(countries);
Map.addLayer(nightlights2021,{min:0,max:10,palette:['000000','700000','808080','FFFF00','ffffff','ffffff','ffffff']},"nightlights 2021");
*/
