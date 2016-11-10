var pool = require ('./config');

var getConnection = function (callback) {
    pool.getConnection(function (err, connection) {
        if (err) throw err;
        callback(connection);
    })

};

var todoList = {
    // Получение всех задач
    list(callback) {
        pool.getConnection(function(err, connection) {
            if (err) throw err;
            connection.query('select * from todos;', callback);
            connection.release();
        });
    },

        /*

    // Добавить задачу
    add: function (text, callback, completed) {
        pool.getConnection(function(err, connection) {
            if (err) throw err;
            connection.query('insert into todos (text, completed) values ('+text+', '+completed+');', function (err) {
                if (err) throw err;
                callback(err);
                connection.release();
            });
        });
    },

    // Изменить описание задачи
   change: function (id, newText, callback) {
        pool.getConnection(function(err, connection) {
            if (err) throw err;
            connection.query('update todos set ? where id = ?;', [newText, id], function (err, rows) {
                if (err) throw err;
                callback(err);
                connection.release();
            });
        });
    },

    // Отметить задачу как сделанную
    complete: function (id, callback) {
        pool.getConnection(function(err, connection) {
            if (err) throw err;
            connection.query('update todos set completed = "true" where id='+id+'', function (err, rows) {
                if (err) throw err;
                callback(err);
                connection.release();
            });
        });
    },

    // Удаление задачи
    delete: function (id, callback) {
        pool.getConnection(function(err, connection) {
            if (err) throw err;
            connection.query('delete from todos where id = '+id+'', function (err, rows) {
                if (err) throw err;
                callback(err);
                connection.release();
            });
        });
    },

    */


};


    module.exports = todoList;
