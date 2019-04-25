export const trackEventHandler = (req, res) => {
  console.log(req.body);
  res.sendStatus(200);
};

export const pageViewHandler = (req, res) => {
  console.log(req.body);
  res.sendStatus(200);
};
