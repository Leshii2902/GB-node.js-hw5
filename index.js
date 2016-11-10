var readline = require('readline');
var todoList = require('./todolist');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



rl.write('Меню:\n');
rl.write('1 - просмотреть содержимое базы данных\n');
rl.write('x - выход\n');

rl.on('line', function(num){
    if (num==1) {
        todoList.list(function(err, tasks){
            if (err) throw err;
            console.log(tasks);
            //r1.write(tasks);
        });
    }
    if (num=='x') this.close();

});