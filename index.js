const express = require('express')
const app = express()
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
    app.get('/', (req, res) => {
        res.render('index');
      });
app.use(bodyParser.urlencoded({ extended: true }));
      app.use(bodyParser.json());
      
      app.post('/register', (req, res) => {
        // handle form data
      });
      

app.listen(1010, () => {
  console.log('app is listening on 1010!')
})
