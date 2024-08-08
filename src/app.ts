import express, { Express } from 'express';
import registerRoute from './routes/Register';
import homeRoute from './routes/Home';
import successRoute from './routes/Success';

const app: Express = express();

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use('/', homeRoute);

app.use('/register', registerRoute);

app.use('/success', successRoute);

export default app;