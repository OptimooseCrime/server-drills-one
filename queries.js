const database = require("./database-connection");

module.exports = {
    list(){
      return database('resolution').select()
    }
    // read(id){
    // },
    // create(resolution){
    // },
    // update(id, resolution){
    // },
    // delete(id){
    // }
};
