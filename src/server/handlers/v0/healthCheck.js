export const healthCheckHandler = (req, res, endpoints) => {
  res.json({ status: 'ok', version: '0.0', endpoints });
};
