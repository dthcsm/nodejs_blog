const newsRoute = require('./news');
const siteRoute = require('./site');

function route(app){
    app.use('/news', newsRoute);

    app.use('/', siteRoute);

    // app.get('/', (req, res) => {
    //     res.render('home');
    // })

    // app.get('/news', (req, res) => {
    //     res.render('news');
    // })
    

//     app.get('/search', (req, res) => {
//         res.render('search');
//     })

//     app.post('/search', (req, res) => {
//         res.send('');
//     })
}

module.exports = route;