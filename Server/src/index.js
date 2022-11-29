const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const loginRoutes = require("./routes/crud");
require("./connectionAndSchema/config");
 

app.use("/api/property",loginRoutes)
  app.listen(port, () => console.log(`App listening on port ${port}!`));

  module.exports = app;