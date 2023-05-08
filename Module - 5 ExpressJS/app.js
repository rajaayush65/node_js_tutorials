const express = require("express");
const path = require("path")
const app = express();

const rootDir = require("./util/path");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(rootDir, 'public')))

app.use('/admin',adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, 'views', 'pagenotfound.html'));
})


app.listen(4001, () => {
  console.log(`Server Running on http://localhost:4001`);
});
