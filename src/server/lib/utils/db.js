import dbConnection from '@serverCore/lib/database';

export const USERS_TABLE = 'users';
export const ANALYTICS_TABLE = 'analytics';

export default dbConnection({
  client: 'pg',
  host: 'localhost',
  port: '5432',
  user: 'jasonlea-jones',
  password: '',
  database: 'myproject'
});
