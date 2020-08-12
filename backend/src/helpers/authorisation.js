const jwt = require("jsonwebtoken");
// FORMAT OF TOKEN
// Authorization: Bearer <access_token>
const verifyToken = (req, res, next) => {
  // Get auth header value
  const authHeader = req.headers["authorization"];
  // Check if bearer is undefined
  // Split at the space && get value index 1
  const bearerToken = authHeader && authHeader.split(" ")[1];
  // Check if bearerToken is null
  if (bearerToken == null) {
    return res.sendStatus(401);
  }
  jwt.verify(bearerToken, process.env.Acces_Token_Secret, (err, user) => {
    console.log(err);
    if (err) return res.sendStatus(403);
    // set the token
    req.token = bearerToken;
    next();
  });
};
module.exports = { verifyToken };
