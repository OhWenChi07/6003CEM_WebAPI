const connect = require('./ImageConnect')

//replace the movies after adding comma
connect.updateOne({Tags:"basketball, game, basket"}, {Tags:"Sport"}).then(res=> {
    console.log("Successfully update");
});

