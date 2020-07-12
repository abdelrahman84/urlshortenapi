import express =  require('express');
import * as bodyParser from 'body-parser';
import URLShorten from './controllers/shortenurl';
const app = express();
const port = 8080; // default port to listen
app.use(bodyParser.json());

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