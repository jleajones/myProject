import { USERS_TABLE } from '@serverLib/utils/db';

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
export async function createUsers(req, res) {
  res.json('OK');
}

/**
 *
 * @param req
 * @param res
 * @param logger
 * @param db
 * @returns {Promise<void>}
 */
export async function readUsers(req, res, logger, db) {
  try {
    const users = await db.select().from(USERS_TABLE);
    logger.info(users);
    res.json(users);
  } catch (e) {
    logger.error(e);
    res.json(e);
  }
}

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
export async function updateUsers(req, res) {
  res.json('OK');
}

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
export async function deleteUsers(req, res) {
  res.json('OK');
}

/**
 *
 * @param req
 * @param res
 * @param logger
 * @param db
 * @returns {Promise<void>}
 */
export async function createUser(req, res, logger, db) {
  try {
    const users = await db.select().from(USERS_TABLE);
    res.json(users);
  } catch (e) {
    logger.error(e);
    res.json(e);
  }
}

/**
 *
 * @param req
 * @param res
 * @param logger
 * @param db
 * @returns {Promise<void>}
 */
export async function readUser(req, res, logger, db) {
  try {
    const users = await db
      .where({ id: req.params.uid })
      .select()
      .from(USERS_TABLE);
    res.json(users);
  } catch (e) {
    logger.error(e);
    res.json(e);
  }
}

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
export async function updateUser(req, res) {
  res.json('OK');
}

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
export async function deleteUser(req, res) {
  res.json('OK');
}
