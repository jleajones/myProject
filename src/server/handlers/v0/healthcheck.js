const API_V1_PATH = '/api/v1';

// redirect to v1 handler
export const healthCheckHandler = (req, res) => {
  req.url = API_V1_PATH;
  req.app.handle(req, res);
};
