var Database = function(connection){
    this.connection = connection;
    this.getTask = function(taskId, callback){
        connection.query("select * from tasks where id=?;",[taskId] ,function(error, results, fields){
            if(error){
                console.error(error.stack);
                return;
            }
            callback(results);
        });
    }
};

module.exports = Database;