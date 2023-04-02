const path = require('path');
const express = require('express');
const app = express();
const port = 3010;
const router = require('./routers/index');
const { urlencoded } = require('express');

//ejs
app.set('views', './views');
app.set('view engine', 'ejs')
app.set("views", path.join(__dirname, 'views'));

console.log(path.join(__dirname,"views"));

//temple engine
// app.engine('handlebars', engine());
// app.set('view engine', 'handlebars');

app.use("/static",express.static(path.join(__dirname,"public")))

console.log(path.join(__dirname,"public"));

// app.use(express.static(path.join(__dirname,'public')))
// app.use(express.static('public'))


app.use(router);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})


app.use(urlencoded()) //truyền dữ liệu từ form lên sever

