import { config } from "dotenv";
import { changeJsonToArr, writeFile } from "../fsFile/fsFunction.js";
const PATH_TO_DATA = "src/db/data.json";
import jwt from "jsonwebtoken";

config();
export function getDAtaFromCli() {
  return async (req, res) => {
    try {
      const { category, message } = req.body;
      const getReqBody = await changeJsonToArr(PATH_TO_DATA);
      const storedInObj = {
        id: getReqBody.length + 1,
        category,
        message,
        createAt: new Date(),
      };
      getReqBody.push(storedInObj);
      await writeFile(PATH_TO_DATA, getReqBody);
      return res.json(storedInObj);
    } catch (error) {
      res.status(400).json({ errMsg: "Bed Request" });
      console.error(error);
    }
  };
}

export async function getAdminToken(req, res) {
  const password = req.body;
  const token = jwt.sign(password, process.env.ADMIN_PASSWORD, {
    expiresIn: "6h",
  });
  res.json({ msg: "Verify Success", token });
}
