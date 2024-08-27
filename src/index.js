const express = require("express");
const morgan = require("morgan");
const path = require("path");
const handlebars = require("express-handlebars");
const app = express();
const port = 3001;

const routes=require('./routes');

app.use(express.static(path.join(__dirname,'public')))


// HTTP logger
app.use(morgan("combined"));
// Template Engine
app.engine("hbs", handlebars.engine({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

routes(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
