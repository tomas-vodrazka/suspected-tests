const findInFiles = require("find-in-files");
const fs = require("fs");

const ROOT_PATH = "../folder-to-check";

const main = async () => {
  const resutls = await findInFiles.findSync(/it\(.*/, ROOT_PATH, /\.spec\./);

  const suspected = [];
  for (const [key, value] of Object.entries(resutls)) {
    if (value.count === 1 && !key.includes("node_modules")) {
      if (value.matches[0].includes("should render successfully")) {
        suspected.push(key);
      }
    }
  }
  await fs.writeFileSync("./suspected-tests.json", JSON.stringify(suspected));
  console.log(`Found ${suspected.length} suspected tests`);
};

main();
