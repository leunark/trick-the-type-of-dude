import express from 'express';
import { router } from './routes';

// Initialize app
const app = express();

// Setup server port
const port = process.env.PORT || 3000;

// Send message for default URL
app.get('/', (req, res) => res.send('Trick Comments API is online!'));

// Import api routes
app.use('/comments', router);

// Launch app by listening to the specified port
app.listen(port, () => {
    console.log('Example app listening on port '+port+'!'); 
});

