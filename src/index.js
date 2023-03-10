const path = require('path')
const express = require('express')
var morgan = require('morgan')
const {engine} = require('express-handlebars')
// const handlebar = require('express-handlebars')

const app = express()
const port = 3000

const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')))

//HTTP logger
app.use(morgan('combined'))

//template engine
app.engine('hbs', engine({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// Routes init
route(app);

// app.get('/', (req, res) => {
//   res.render('home');
// })

// app.get('/news', (req, res) => {
//   res.render('news');
// })

// app.post('/search', (req, res) => {
//   res.send('');
// })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})