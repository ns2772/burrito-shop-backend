import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'; // Use ES6 import instead of require
import burritoRoutes from './routes/burritoRoutes';
import orderRoutes from './routes/orderRoutes';

const app = express();
const port = 5000;

app.use(cors());

app.use(bodyParser.json());

app.use('/api/burrito', burritoRoutes);
app.use('/api/orders', orderRoutes);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
