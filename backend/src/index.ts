import express =  require('express');
import * as bodyParser from 'body-parser';
import URLShorten from './controllers/shortenurl';
const app = express();
const port = 8000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://mongo:27017/shortenurl', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
var cors = require('cors');
app.use(cors({origin: 'http://localhost:8080'}));
app.get( "/", ( req, res ) => {
    res.json({title : 'URLShorten' });
});

app.use('/api', URLShorten);

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );

module.exports = app;