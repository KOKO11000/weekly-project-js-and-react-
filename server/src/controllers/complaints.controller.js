import { config } from "dotenv";
import { changeJsonToArr, writeFile } from "../fsFile/fsFunction.js";
const PATH_TO_DATA = "src/db/data.json";
import jwt from "jsonwebtoken";

config();
export async function getDAtaFromCli(req, res) {
  try {
    const { category, message } = req.body;
    console.log(req.body);

    if (!message || !category) {
      res.json({msg:"Message or Category are missing!"})
    }

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
}

export async function getAdminToken(req, res) {
  const { password } = req.body;
  const token = jwt.sign(password, process.env.ADMIN_PASSWORD, {
    // להשים זמן לטוקן
  });
  res.json({ msg: "Verify Success", token });
}

export async function getDataSortedForAdmin(_, res) {
  const getData = await changeJsonToArr(PATH_TO_DATA);
  getData.sort((a, b) => {
    return a[1] - b[1];
  });
  getData.reverse();
  return res.json(getData);
}
