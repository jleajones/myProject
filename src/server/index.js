import express from 'express';
import React from 'react';
import bodyParser from 'body-parser';
import moment from 'moment';
import morgan from 'morgan';

import buildLogger from '@serverCore/lib/logger';
import renderer from '@serverCore/handlers/renderer';
import { healthCheck } from '@serverCore/middleware/healthCheckMiddleware';

import { apiBuilder } from '@middleware/apiMiddleware';

import projectConfig from '@root/package.json';
import apiVersion from '@api/apiVersion';

const startTime = moment();
const PORT = 3001;
const logger = buildLogger(
  `${projectConfig.name}-server`,
  'error.log',
  'application.log'
);
const app = express();
app.use(bodyParser.json());
app.use('/', express.static('build'));
app.use(morgan('combined', { stream: logger.stream }));
app.use('/api', apiBuilder(logger, apiVersion));
app.use(
  '/health-check',
  healthCheck(logger, projectConfig.version, projectConfig.name, startTime)
);

app.get('*', (req, res) => renderer(req, res, logger));
app.disable('x-powered-by');
app.listen(PORT, () => {
  logger.info(`🌎 => Running... http://localhost:${PORT}`);
});
