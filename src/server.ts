import dotenv from 'dotenv';
dotenv.config({ path: './config.env' });

import app from './app';

const port: number = Number(process.env.PORT) || 5000;

app.listen(port, (): void => {
    console.log(`App listening on port ${port}`);
});