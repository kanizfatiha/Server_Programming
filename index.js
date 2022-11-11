const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();
const port = 5000;

const router = require("./routes")


app.use(express.static("public"))
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");






//express fileupload middleware
app.use(fileUpload());

//for index.html
app.use(express.static('public'));
app.use(router);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/upload', (req, res) => {
  // Get the file that was set to our field named "image"
  const { image } = req.files;

  // If no image submitted, exit
  if (!image) return res.sendStatus(400);

  // Move the uploaded image to our upload folder
  image.mv(__dirname + '/upload/' + image.name);

  res.sendStatus(200);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});


