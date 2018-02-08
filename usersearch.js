var weather = require('weather-js');
var testUser = new UserSearch("Holly", "Houston");
testUser.getWeather();

function UserSearch(name, location) {
    this.name = name;
    this.location = location;
    this.date = Date.now();
    this.getWeather = function() {
        weather.find({ search: this.location, degreeType: 'F' }, function(err, result) {
            if (err) console.log(err);

            console.log(JSON.stringify(result, null, 2)); 

            fs.writeFileSync("/log.txt", "Name " + this.name + "location "+ this.location+ "date " + this.date, ["a"])
        });
    }
}


// Options: 
// search:     location name or zipcode 
// degreeType: F or C