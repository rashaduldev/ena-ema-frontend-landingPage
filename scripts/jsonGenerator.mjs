import fs from "fs";

const JSON_FOLDER = "./.json";

try {
  // create folder if it doesn't exist
  if (!fs.existsSync(JSON_FOLDER)) {
    fs.mkdirSync(JSON_FOLDER);
    console.log("✅ .json folder created");
  } else {
    console.log("ℹ️ .json folder already exists");
  }

  // create empty json files so project doesn't break
  fs.writeFileSync(`${JSON_FOLDER}/posts.json`, JSON.stringify([]));
  fs.writeFileSync(`${JSON_FOLDER}/search.json`, JSON.stringify([]));

  console.log("✅ posts.json and search.json generated (empty)");
} catch (err) {
  console.error("❌ Error:", err);
}
