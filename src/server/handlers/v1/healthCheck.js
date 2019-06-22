export const healthCheckHandler = (req, res, endpoints) => {
  res.json({ status: 'ok', version: '1.0', endpoints });
};
