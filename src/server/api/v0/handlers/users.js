import { USERS_TABLE } from '@serverLib/utils/db';

export async function createUsers(req, res) {
  res.json('OK');
}
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
export async function updateUsers(req, res) {
  res.json('OK');
}
export async function deleteUsers(req, res) {
  res.json('OK');
}

export async function createUser(req, res, logger, db) {
  try {
    const users = await db.select().from(USERS_TABLE);
    res.json(users);
  } catch (e) {
    logger.error(e);
    res.json(e);
  }
}
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
export async function updateUser(req, res) {
  res.json('OK');
}
export async function deleteUser(req, res) {
  res.json('OK');
}
