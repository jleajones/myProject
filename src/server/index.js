import express from 'express';
import React from 'react';
import bodyParser from 'body-parser';

import API from './routes/api';
import renderer from '@handlers/renderer';


const app = express();
app.use(bodyParser.json());
app.use('/', express.static('build'));
app.use('/api', API);

app.get('*', renderer);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`🌎 => Running... http://localhost:${PORT}`);
});
