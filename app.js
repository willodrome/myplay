const bodyParser = require("body-parser");
const express = require("express");
const bcrypt = require("bcryptjs");
const multer = require("multer");
const cors = require("cors");
const path = require("path");
const fs = require("fs");

const app = express();

const userData = __dirname + "/users/user-data.json";

const storage = multer.diskStorage({
  destination: "./client/build/public/uploads",
  filename: (req, file, cb) => {
    cb(null, `${file.fieldname}-${Date.now()}x${(Math.random() * 100000).toFixed()}${path.extname(file.originalname)}`);
  },
});

const upload = multer({ storage });
const uploadTask = upload.single("avatar");

app.use(cors());
app.use(express.static(path.join(__dirname, "./client/build")));
// app.use((req, res, next) => {
//   //console.log(req.url.split("/")[1]);
//   if (req.url.split("/")[1] === "api") {
//     express.static(path.join(__dirname, "./public"));
//     console.log("api");
//   } else {
//     express.static(path.join(__dirname, "./client/public"));
//     console.log("client");
//   }
// });
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));

// Home route
app.get("/", async (req, res) => {
  res.send("Say Hi to API");
});

// Upload profile image
app.post("/api/upload", uploadTask, async (req, res, next) => {
  try {
    res.status(200).json({ message: "Image uploaded successfully", filename: `/public/uploads/${req.file.filename}` });
  } catch (err) {
    return next(err);
  }
});

// Save profile data
app.post("/api/save", async (req, res, next) => {
  try {
    const { firstname, lastname, password, phone } = req.body;
    const pwdHash = await bcrypt.hash(password, 4);
    fs.readFile(userData, "utf8", (err, data) => {
      d = JSON.parse(data);
      d.push({
        timestamp: Date.now(),
        firstname,
        lastname,
        password: pwdHash,
        phone,
      });

      json = JSON.stringify(d);
      fs.writeFile(userData, json, "utf8", err => {
        if (err) throw err;
        res.status(200).json({ message: "User profile saved successfully", userdata: JSON.stringify(...d.slice(-1)) });
      });
    });
  } catch (err) {
    return next(err);
  }
});

const port = 7000;

app.listen(port, () => console.log(`Server running on port ${port}...`));
