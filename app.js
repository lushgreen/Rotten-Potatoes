const express = require('express')
const app = express()

var exphbs = require('express-handlebars');

//app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
//app.engine('.hbs', exphbs.engine({ extname: '.hbs', defaultLayout: "main"}));
app.engine('handlebars', exphbs.engine({ extname: 'handlebars', defaultLayout: "main"}));
app.set('view engine', 'handlebars');

/*
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/', (req, res) => {
  res.render('home', { msg: 'Handlebars are Cool!' });
})
*/

// OUR MOCK ARRAY OF PROJECTS
let reviews = [
  { title: "Great Review", movieTitle: "Batman II" },
  { title: "Awesome Movie", movieTitle: "Titanic" },
  { title: "My Movie Review", movieTitle: "Transformers: Megatron" }
]

// INDEX
/*
app.get('/reviews', (req, res) => {
  res.render('reviews-index', { reviews: reviews });
})
*/

app.get('/', (req, res) => {
  res.render('reviews-index', { reviews: reviews });
})

app.listen(3000, () => {
  console.log('App listening on port 3000!')
})

