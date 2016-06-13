function sendResponse(fn) {
  return (req, res, next) =>
    Promise.resolve(fn(req, res))
    .then(result => res.json(result))
    .catch(next);
}

module.exports = {
  sendResponse: sendResponse
};
