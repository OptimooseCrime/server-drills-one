const database = require("./database-connection");

module.exports = {
    list(){
      return database('resolution').select()
    },
    read(id){
      return database('resolution').where('id', id).first()
    },
    // create(resolution){
    // },
    // update(id, resolution){
    // },
    // delete(id){
    // }
};
