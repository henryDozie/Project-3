const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const SALT_ROUNDS = 11;
const TOKEN_KEY = 'mosquito fossil';

const hashPassword = async(password) => {
  const digest = await bcrypt.hash(password, SALT_ROUNDS);
  return digest
}
const checkPassword = async (password, password_digest) => {
  return await bcrypt.compare(password, password_digest);
}
// requirements for p3
const genToken = (data) => {
  const token = jwt.sign(data, TOKEN_KEY);
  return token;
};
// sign is what authorizes it
const restrict = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const data = jwt.verify(token, TOKEN_KEY);
    res.locals.user = data;
    next();
  } catch (e) {
    console.log(e);
    res.status(403).send('Unauthorized');
  }
}
module.exports = {
  hashPassword,
  checkPassword,
  genToken,
  restrict
}