const connect = require('./BlogsConnect')

connect.deleteOne({ID:"ecfbe002-8287-4e3a-a3ea-5397a1189351"}).then(res=> {
    console.log("Success deleting one");
});