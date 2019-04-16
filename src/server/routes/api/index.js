import { Router } from 'express';
import v0 from './v0';
import v1 from './v1';

const API = Router();
API.use('/v0', v0);
API.use('/v1', v1);

export default API;
