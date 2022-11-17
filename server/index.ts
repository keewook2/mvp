import express, { Request, Response } from 'express';
const cors = require('cors');
const path = require('path');

const app = express();
const test = require('./test');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../client/dist')));

app.use('/api', test);

app.get('*', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

const port: number = 3000;
app.listen(port, () => console.log(`Server is listening port:${port}`));