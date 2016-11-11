var todoList = require('./todolist');
var express = require('express');
var bodyParser = require('body-parser');
var pug = require('pug');

var app = express();

var port = 8000;

app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

app.get('/', function (req, res) {
    todoList.list(function (err,tasks) {
        if (err) throw err;
        res.render('index', {
            tasks: tasks,
            title: 'Список задач'
        });
    })
});


app.get('/new', function (req, res) {
    res.render('new');
});

app.post('/post', function (req, res) {
   todoList.add(req.body.text, req.body.oompleted, function (err) {
       if (err) throw  err;
       res.redirect('/');
   });
});


app.get('/edit/:id', function(req, res) {
   todoList.changePage(req.params.id, function (err, task) {
       if (err) throw err;
       res.render('edit', {text: task[0].text, completed: task[0].completed, id: task[0].id});
   });
});

app.post('/', function (req, res) {
    todoList.change(req.body.id, req.body.text, req.body.completed, function (err) {
        if (err) throw err;
        res.redirect('/');
    });
});


app.get('/delete/:id', function (req, res) {
   todoList.delete(req.params.id, function (err) {
       if (err) throw err;
       res.redirect('/');
   });
});


app.listen(port, function () {
   console.log('Сервер запущен на порту', + port);
});