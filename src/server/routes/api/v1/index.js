import { Router } from 'express';

import { apiCheck } from '@handlers/v1/apiHandlers';

const v1 = Router();
v1.get('/', apiCheck);

export default v1;
