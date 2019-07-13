import { USERS_TABLE } from '@serverLib/utils/db';

export async function getUsers(req, res, logger, db) {
  try {
    const users = await db.select().from(USERS_TABLE);
    console.log(users);
    res.json(users);
  } catch (e) {
    logger.error(e);
    res.json(e);
  }
}
export async function getUser(req, res, logger, db) {
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

export async function createUser(req, res, logger, db) {
  try {
    const users = await db.select().from(USERS_TABLE);
    res.json(users);
  } catch (e) {
    logger.error(e);
    res.json(e);
  }
}
