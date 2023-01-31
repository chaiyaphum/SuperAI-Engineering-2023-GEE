
var dataset = ee.ImageCollection('NOAA/DMSP-OLS/NIGHTTIME_LIGHTS')
                .select('stable_lights')
                .map(function (img) {
                  return img.set('year', ee.Image(img).date().get('year'))
                })
                
var year = [1990, 1995, 2000, 2005, 2010, 2013]

for(var i =0; i<year.length; i++) {
  var filter = dataset.filterMetadata('year', 'equals', year[i]);
  var nighttimeLightsVis = {
    bands: 'stable_lights',
    palette: ['black', 'white', 'orange', 'yellow', 'red'],
    max: 63.0,
  };

  Map.setCenter(100.57507717373369, 13.867432366904056, 6);
  Map.addLayer(filter, nighttimeLightsVis, 'Nighttime Lights Year: ' + year[i], false);
}

////////////////////////////////////////////////////////

var dataset = ee.ImageCollection("WorldPop/GP/100m/pop");

var visualization = {
  bands: ['population'],
  min: 0.0,
  max: 50.0,
  palette: ['24126c', '1fff4f', 'd4ff50']
};

Map.setCenter(100.57507717373369, 13.867432366904056, 6);

Map.addLayer(dataset, visualization, 'Population');


/*
var dataset = ee.ImageCollection("CIESIN/GPWv411/GPW_Population_Density").first();
var raster = dataset.select('population_density');

var raster_vis = {
  "max": 1000.0,
  "palette": [
    "ffffe7",
    "FFc869",
    "ffac1d",
    "e17735",
    "f2552c",
    "9f0c21"
  ],
  "min": 200.0
};

Map.setCenter(100.57507717373369, 13.867432366904056, 6);
Map.addLayer(raster, raster_vis, 'population_density');
*/

