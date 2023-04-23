import express from 'express';
import cors from 'cors';
import Productrouter from './api/products/product.routes';

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use('/api', Productrouter);

export default app;
