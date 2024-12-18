import fs from "node:fs";

function readFileProxy(path, encoding) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, encoding, (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
}

const path = "../../data/book.txt";
const encoding = "utf-8";

readFileProxy(path, encoding).then((data) => {
  console.log(data);
  fs.unlink(path, (err) => {
    if (err) {
      throw err;
    }
  });
});
