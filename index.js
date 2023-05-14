const express = require("express");
const app = express();
const home = require("./routers/home");
const content = require("./routers/content");
const errorPage = require("./routers/errorPage");

app.use("/", home);
app.use("/content", content);
app.use(errorPage);

app.listen(3000, () => console.log("hello"));
