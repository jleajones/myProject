import knex from 'knex';

/**
 *
 * @param client
 * @param host
 * @param port
 * @param user
 * @param password
 * @param database
 * @returns {Knex<any, unknown[]>}
 */
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
