const app = require("./server/config/app-config");
const mongoose = require("mongoose");
const db = require("./server/config/database");

const port = process.env.PORT || 4000;
mongoose.connect(db.url, { useNewUrlParser: true });

app.listen(port);
console.log("Successfully connected to port " + port);

module.exports = app;