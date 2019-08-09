import dbConnection from '@serverCore/lib/database';

export const USERS_TABLE = 'users';
export const ANALYTICS_TABLE = 'analytics';

export default dbConnection({
  client: 'pg',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});
