const getIndex = (req, res) => {
    res.render('index', { title: 'Index' });
  };
const getSlideshow = (req, res) => {
    res.render('slideshow', { title: 'Slideshow' });
  };
const getUpload = (req, res) => {
    res.render('upload', { title: 'Upload an image' });
  };
  
  const postUpload = (req, res) => {
     // Get the file that was set to our field named "image"
  const { image } = req.files;

  // If no image submitted, exit
  if (!image) return res.sendStatus(400);

  // Move the uploaded image to our upload folder
  image.mv(__dirname + '/upload/' + image.name);

  res.sendStatus(200);
  }



module.exports = { getUpload, postUpload, getIndex, getSlideshow };