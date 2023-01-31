var dataset = ee.ImageCollection('NOAA/VIIRS/DNB/MONTHLY_V1/VCMSLCFG')
                  .filter(ee.Filter.date('2017-05-01', '2017-05-31'));

var nighttime = dataset.select('avg_rad');
var nighttimeVis = {min: 0.0, max: 60.0};

Map.setCenter(100.57507717373369, 13.867432366904056, 10);

Map.addLayer(nighttime, nighttimeVis, 'Nighttime');
