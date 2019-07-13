import projectConfig from '@root/package';
import buildLogger from '@serverCore/lib/logger';

export default buildLogger(
  `${projectConfig.name}-server`,
  'error.log',
  'application.log'
);
