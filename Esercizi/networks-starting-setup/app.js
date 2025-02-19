const express = require("express"),
  bodyParser = require("body-parser"),
  axios = require("axios").default,
  mongoose = require("mongoose"),
  Favorite = require("./models/favorite"),
  app = express();

app.use(bodyParser.json());

app.get("/favorites", async (req, res) => {
  const favorites = await Favorite.find();
  res.status(200).json({
    favorites: favorites,
  });
});

app.post("/favorites", async (req, res) => {
  const favName = req.body.name,
    favType = req.body.type,
    favUrl = req.body.url;

  try {
    if (favType !== "movie" && favType !== "character")
      throw new Error('"type" should be "movie" or "character"!');
    const existingFav = await Favorite.findOne({ name: favName });
    if (existingFav) throw new Error("Favorite exists already!");
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

  const favorite = new Favorite({
    name: favName,
    type: favType,
    url: favUrl,
  });

  try {
    await favorite.save();
    res
      .status(201)
      .json({ message: "Favorite saved!", favorite: favorite.toObject() });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
  }
});

app.get("/movies", async (req, res) => {
  try {
    const response = await axios.get("https://swapi.dev/api/films");
    res.status(200).json({ movies: response.data });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
  }
});

app.get("/people", async (req, res) => {
  try {
    const response = await axios.get("https://swapi.dev/api/people");
    res.status(200).json({ people: response.data });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
  }
});

// host.docker.internal -> localhost (for Docker) interpretato da docker

mongoose.connect(
  "mongodb://172.17.0.2:27017/swfavorites",
  { useNewUrlParser: true },
  (err) => {
    if (err) console.log(err);
    else app.listen(3000);
  }
);
