var fs = require("fs");
var http = require("http");

var form = `<form action="/message" method="post">
<input type="text" name="message" id="message" placeholder="Enter Message">
<button type="submit">Send Message</button>
</form>`;

var server = http.createServer((req, res) => {
  var pathName = req.url;

  if (pathName === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });

    res.end(form, () => console.log("Form written to the page"));
  } else if (pathName === "/message" && req.method === "POST") {
    var data = "";
    // console.log(req.on("data", () => {}));
    req.on("data", chunk => {
      data += chunk;
      var msg = data.split("+").join(" ");

      var message = msg.substring(8, msg.length);
      fs.writeFile("./message.txt", message, err => {
        if (err) console.log(err);
      });
    });
    req.on("end", () => {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Message written to the file successfully");
    });
  }
});

server.listen(8000, "127.0.0.1", () =>
  console.log("Server listening on port 8000")
);
