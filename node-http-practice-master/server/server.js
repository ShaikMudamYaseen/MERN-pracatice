const httpreq = require("http");
const url = require("url");
const server = httpreq.createServer((req, res) => {
  if (req.method.toLocaleLowerCase() == "get") {
    console.log(req.method);
    const queryParams = url.parse(req.url, true).query;
    console.log(queryParams);
    console.log(queryParams.username);
    console.log(queryParams.password);

    res.write(JSON.stringify(queryParams));
  } else if (
    (req.url == "/login") &
    (req.method.toLocaleLowerCase() == "post")
  ) {
    // if(req.body)

    res.write("login");
  }

  res.end();
});

server.listen(3000);
