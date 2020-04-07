/*
EXPORTS data
data = [{"country" : " ..", "totalDeaths" : [{"date": ".." ,"data" :" .."},..], "totalInfection":[{"date": ".." ,"data" :" .."},..], "totalRecoverd":[{"date": ".." ,"data" :" .."},..]}];
Date will always start from 1st Jan 2020.
*/
const availableCountries = ["India","China", "Korea, South", "Italy", "Spain" ,"United Kingdom", "Iran", "US"];

/*Following varibles are defined here for defualt values*/
var selectedCountries = ["India","China","Spain","Iran","Italy"]
var graphDataType="totalDeaths";
var graphStyle="line";
var rgbColor = [ ]
function addColor(r,g,b){
  rgbColor.push({"r": r, "g": g, "b":b});
}
addColor(255,99,71);
addColor(128,0,0);
addColor(255,140,0);
addColor(255,255,0);
addColor(154,205,50);
addColor(85,107,47);
addColor(32,178,170);
addColor(47,79,79);
addColor(138,43,226);
var colorIndex = -1;
function addCountry(name){
  colorIndex++;
  return {
    "country":name,
    "color":rgbColor[colorIndex],
    "index":0,
    "totalDeaths":
      [

      ],
    "totalInfections":
      [

      ],
    "totalRecovered":
      [

      ]
  }
}
var data =
  [

  ]

  fetch("https://pomber.github.io/covid19/timeseries.json")
    .then(response => response.json())
    .then(d => {

      availableCountries.forEach(country_name => {
        data.push(addCountry(country_name));
        d[country_name].forEach(({ date, confirmed, recovered, deaths }) => {
          data.find(country => country["country"] == country_name)["totalDeaths"].push({"date":date,"data":deaths});
          data.find(country => country["country"] == country_name)["totalInfections"].push({"date":date,"data":confirmed});
          data.find(country => country["country"] == country_name)["totalRecovered"].push({"date":date,"data":recovered});
        });
      });

    });
