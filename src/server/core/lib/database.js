import knex from 'knex';

export default ({ client, host, port, user, password, database }) =>
  knex({
    client,
    connection: {
      host,
      port,
      user,
      password,
      database
    }
  });
