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
      res.render("index", { data: mainElements });

    }
  });
});
app.get("/data", function (req, res) {
  file.readFile("books.json", "utf-8", (err, data) => {
    if(err) {
      throw err
    } else {
      const json = JSON.parse(data)
      res.send(json)
    }
  })

});

// API !!!
// API !!!
app.use("/api", router);

router.get("/authors", (req, res) => {
  file.readFile("books.json", "utf-8", (err, data) => {
    if(err) {
      throw err
    } else {
      const json = JSON.parse(data)
      const authors = json.books.map(e => e.author)
      res.send(authors)
    }
  })
});

router.get("/allbooks", (req, res) => {
  file.readFile("books.json", "utf-8", (err, data) => {
    if(err) {
      throw err
    } else {
      const json = JSON.parse(data)
      res.send(json)
    }
  })
});
router.get("/allisbn", (req, res) => {
  file.readFile("books.json", "utf-8", (err, data) => {
    if(err) {
      throw err
    } else {
      const json = JSON.parse(data)
      const isbn = json.books.map(e => e.isbn)
      res.send(isbn)
    }
  })
});

// BOOKS!!!
// BOOKS!!!
app.use("/book", router);
app.listen(3000);
