const express = require("express");
const path = require("path")
const expressHbs = require("express-handlebars");
const app = express();


// app.engine('hbs', expressHbs({layoutsDir: 'views/layouts/', defaultLayout: 'main-layout', extname: 'hbs'}));
// app.set('view engine','hbs')
// app.set('view engine','pug')

app.set('view engine','ejs')
app.set('views','views')

const rootDir = require("./util/path");

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(rootDir, 'public')))

app.use('/admin',adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).render('pagenotfound',{ pageTitle: "404 - Page Not Found!", path: "*"});
})


app.listen(4001, () => {
  console.log(`Server Running on http://localhost:4001`);
});
