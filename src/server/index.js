import express from 'express';
import React from 'react';

import renderer from './handlers/renderer';
import API from './routes/api';


const app = express();
app.use('/', express.static('build'));
app.use('/api', API);

app.get('*', renderer);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`🌎 => Running... http://localhost:${PORT}`);
});
