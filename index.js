const express = require("express");
const app = express();
const router = express.Router();
const file = require("fs");
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("view options", { layout: false });
app.use("/static", express.static("public"));

app.get("/", (req, res) => {
  file.readFile("books.json", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      throw err;
    } else {
      const obj = JSON.parse(data);
      let isbn = obj.books.map((e) => e.title);
      const mainElements = [];
      for (let i = 0; mainElements.length <= 2; i++) {
          const randomElement = isbn[Math.floor(Math.random() * isbn.length)];
              mainElements.push(randomElement);
      }
      //   console.log(obj);
    //   res.send(mainElements)
      res.render("index", { data: mainElements });
    }
  });
});
// app.get("/", function (req, res) {});

// API

// API
app.use("/api", router);

router.get("/", (req, res) => {
  res.send("/1 ");
});

// BOOKS!!!

// BOOKS!!!
app.use("/book", router);
app.listen(3000);
