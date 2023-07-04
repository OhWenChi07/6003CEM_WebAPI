const connect = require('./ConnectWeather')

connect.deleteOne({dt_txt:"2023-06-29 18:00:00"}).then(res=> {
    console.log("Success deleting one");
});