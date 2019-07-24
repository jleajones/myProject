import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import moment from 'moment';
import morgan from 'morgan';

import projectConfig from '@root/package.json';
import renderer from '@serverCore/handlers/renderer';
import healthCheck from '@serverCore/middleware/healthCheckMiddleware';
import logger from '@serverLib/utils/logger';
import db from '@serverLib/utils/db';

import apiBuilder from '@middleware/apiMiddleware';
import apiVersion from '@api/apiVersion';

const startTime = moment();
const PROTOCOL = 'http';
const HOST = 'localhost';
const PORT = 3001;

const app = express();
const { version, name } = projectConfig;
app.use(bodyParser.json());
app.use(cookieParser());
app.use('/', express.static('build'));
app.use(morgan('combined', { stream: logger.stream }));
app.use('/api', apiBuilder(logger, apiVersion, db));
app.use('/health-check', healthCheck(logger, version, name, startTime));

app.get('*', async (req, res) => {
  await renderer(req, res, logger);
});
app.disable('x-powered-by');
app.listen(PORT, async () => {
  logger.info(`🏃 => Running... ${PROTOCOL}://${HOST}:${PORT}`);
});
