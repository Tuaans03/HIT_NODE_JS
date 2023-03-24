const path = require('path')
const express = require('express');
const app = express();
const port = 3000;
const { engine } = require('express-handlebars');
//temple engine
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set("views", path.join(__dirname, '/resources/views'));
app.use(express.static(path.join(__dirname,'public')))



app.get('/', (req, res) => {
  res.render('home');
})

app.get('/index', (req, res) => {
  res.render('home');
})
app.get('/login', (req, res) => {
  res.render('login');
})


app.get('/register', (req, res) => {
  res.render('register');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})

