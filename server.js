//Install express server
const express = require("express");
const path = require("path");
const cors = require("cors");

const MODE = process.env.MODE;
console.log(MODE);
if (!MODE) {
  MODE = "local";
}

const app = express();
app.use(cors());

// Serve only the static files form the dist directory
app.use(express.static(__dirname + `/dist/pfe-pwa-frontend-${MODE}`));

// Force redirect HTTP to HTTPS on heroku
if (MODE === "prod")
  app.use(enforce.HTTPS({ trustXForwardedHostHeader: true }));

// Serve index.html file
app.get("/*", function (req, res) {
  res.sendFile(
    path.join(__dirname + `/dist/pfe-pwa-frontend-${MODE}/index.html`)
  );
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8081);
