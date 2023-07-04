const connect = require('./BlogsConnect')

//replace the movies after adding comma
connect.updateOne({ID:"ecfbe002-8287-4e3a-a3ea-5397a1189351"}, {ID:"111"}).then(res=> {
    console.log("Successfully update");
});

