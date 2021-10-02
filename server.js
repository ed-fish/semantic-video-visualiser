require('dotenv').config();
var express = require('express');

var app = express();
// app.get("public/assets/js/tsne.js", (req, res) => {
//      fs.readFile("public/assets/js/tsne.js", (err, file) => {
//         res.send(file.replace("API_KEY", process.env.API_KEY));
//     });
//   });

app.use(express.static('public'));

app.listen(8080);
