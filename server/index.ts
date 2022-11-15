const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const test = require('./test');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../client/dist')));

app.use('/api', test);

const port: number = 3000;
app.listen(port, () => console.log(`Server is listening port:${port}`));