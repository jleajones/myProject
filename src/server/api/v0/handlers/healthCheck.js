/**
 *
 * @param req
 * @param res
 * @param endpoints
 */
export default (req, res, endpoints) => {
  res.json({ status: 'ok', version: '0.0', endpoints });
};
