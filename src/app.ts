import express from 'express';
import bodyParser from 'body-parser';
// import burritoRoutes from './routes/burritoRoutes';
// import orderRoutes from './routes/orderRoutes';

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello, Burrito Shop!');
});

// app.use('/api/burrito', burritoRoutes);
// app.use('/api/orders', orderRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
