const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url == "/write") {
    fs.writeFile(
      path.join(__dirname, "sample.txt"),
      "hello world",
      (err, data) => {
        if (err) {
          res.write(err);
          res.end();
        } else {
          res.write("writing success");
          res.end();
        }
      }
    );
  } else if (req.url == "/append") {
    fs.appendFile(
      path.join(__dirname, "sample.txt"),
      "appending the file",
      (err, data) => {
        if (err) {
          res.write(err);
          res.end();
        } else {
          res.write("appending success");
          res.end();
        }
      }
    );
  } else if (req.url == "/read") {
    fs.readFile(path.join(__dirname, "sample.txt"), (err, data) => {
      if (err) {
        res.write(err);
        res.end();
      } else {
        console.log(data.toString());
        res.write(data);
        res.end();
      }
    });
  } else if (req.url == "/rename") {
    fs.rename(
      path.join(__dirname, "sample.txt"),
      path.join(__dirname, "sample3.txt"),
      (err) => {
        if (err) {
          res.write(err);
          res.end();
        } else {
          res.write("rename completed");
          res.end();
        }
      }
    );
  }
  else if (req.url == "/delete") {
    fs.unlink(
      path.join(__dirname, "sample.txt"),
      (err) => {
        if (err) {
          res.write(err);
          res.end();
        } else {
          res.write("delete completed");
          res.end();
        }
      }
    );
  }
  // res.end()
});

server.listen(3000);
