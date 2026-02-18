import { config } from "dotenv";
import jwt from "jsonwebtoken";
config();
export async function validPasswords(req, res, next) {
  try {
    const { password } = req.body;

    // if PASS_ADMIN === password : middleware
    if (password === process.env.ADMIN_PASSWORD) return next();

    res.status(401).json({ msg: "Unauthorized" });
  } catch (error) {
    res.status(500).json({ msg: "There is error" });
    console.error(error);
  }
}

export async function verifyToken(req, res, next) {
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      res.status(401).json({ msg: "Token not provided" });
    }
    const payload = jwt.verify(token, process.env.ADMIN_PASSWORD);
    req.admin = payload;
    next();
  } catch (error) {
    res.sendStatus(403).json({ error: error });
  }
}
