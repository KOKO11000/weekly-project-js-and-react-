import fs from "fs/promises";

export async function changeJsonToArr(path) {
  try {
    const readFile = await fs.readFile(path, "utf-8");
    const getFile = JSON.parse(readFile);
    return getFile;
  } catch (err) {
    console.error(err);
  }
}

export async function writeFile(path, data) {
  try {
    const convertToText = JSON.stringify(data);
    await fs.writeFile(path, convertToText);
  } catch (error) {
    console.error(error);
  }
}
