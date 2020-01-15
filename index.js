const fs = require("fs");
const express = require("express");
const path = require("path");

const app = express();
app.set("view engine", "ejs");

const pages = {
  "/": "index",
  "/about": "about",
  "/contact": "contact",
  "/courses": "courses",
  "/exercises": "exercises"
};

for (let route in pages) {
  app.get(route, (req, res) => res.render(`pages/${pages[route]}`));
}

app.get("/send_feedback", (req, res) => {
  fs.open("feedback.txt", "a", (err, fd) => {
    if (err) {
      throw err;
    }

    fs.writeFile(
      fd,
      `Author: ${req.query.name} Rating: ${req.query.rating} Message: '${req.query.feedback}'\n`,
      err => {
        if (err) {
          throw err;
        }
        console.log("Saved feedback");
      }
    );
  });
  res.send("S-a trimis feedbackul");
});

const staticDir = path.join(__dirname, "static");
app.use(express.static(staticDir));

const port = process.env.PORT || 8080;
app.listen(port, () =>
  console.log(`Express app listening on http://localhost:${port}`)
);
