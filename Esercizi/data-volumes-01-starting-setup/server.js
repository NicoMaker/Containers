const fs = require("fs").promises,
  exists = require("fs").exists,
  path = require("path"),
  express = require("express"),
  bodyParser = require("body-parser"),
  app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static("public"));
app.use("/feedback", express.static("feedback"));

app.get("/", (req, res) => {
  const filePath = path.join(__dirname, "pages", "feedback.html");
  res.sendFile(filePath);
});

app.get("/exists", (req, res) => {
  const filePath = path.join(__dirname, "pages", "exists.html");
  res.sendFile(filePath);
});

app.post("/create", async (req, res) => {
  const title = req.body.title,
    content = req.body.text,
    adjTitle = title.toLowerCase(),
    tempFilePath = path.join(__dirname, "temp", adjTitle + ".txt"),
    finalFilePath = path.join(__dirname, "feedback", adjTitle + ".txt");

  await fs.writeFile(tempFilePath, content);
  exists(finalFilePath, async (exists) => {
    if (exists) res.redirect("/exists");
    else {
      // await fs.rename(tempFilePath, finalFilePath);
      await fs.copyFile(tempFilePath, finalFilePath);
      await fs.unlink(tempFilePath);
      res.redirect("/");
    }
  });
});

app.listen(80);
