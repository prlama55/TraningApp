const http = require("http");
const fs = require("fs");
const { square, rect } = require("./shape");
function sum(a, b) {
  return a + b;
}
console.log(square(5));
console.log(rect(5, 4));
var sm = sum(2, 4);
console.log(sm);

fs.writeFile("./index.html", "<p>MERN stack class</p>", function (err, html) {
  if (err) console.log(err);

  fs.readFile("./index.html", function (err, html) {
    if (err) console.log(err);
    http
      .createServer(function (req, res) {
        res.status = 200;
        res.setHeader("Content-Type", "application/html");
        res.write(html);
        res.end();
      })
      .listen(3000, function () {
        console.log("Server running on prot: 3000");
      });
  });
});
