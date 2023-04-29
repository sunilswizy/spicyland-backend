import express from 'express';
import cors from 'cors';
import Categoriesrouter from './api/categories/categories.routes';
import { errorHandler } from './middlewares/errorHandler';

const app = express();


// (async () => {
//     await sequelize.sync({alter: false});
//     console.log("synced")
// })();

app.use(express.json());
app.use(errorHandler);

app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use('/api', Categoriesrouter);

export default app;
