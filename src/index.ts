import express =  require('express');
import * as bodyParser from 'body-parser';
import URLShorten from './controllers/shortenurl';
const app = express();
const port = 8000; // default port to listen
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/shortenurl', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
var cors = require('cors');
app.use(cors({origin: 'http://localhost:8080'}));
// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    res.json({title : 'URLShorten' });
});

app.use('/api', URLShorten);

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );

export default app;