const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const formRoutes = require("./routes/crud");
const loginRoutes = require("./routes/loginRoutes");
require("./connectionAndSchema/config");
 

app.use("/api/property",formRoutes)
app.use("/api/user",loginRoutes)
  app.listen(port, () => console.log(`App listening on port ${port}!`));

  module.exports = app;