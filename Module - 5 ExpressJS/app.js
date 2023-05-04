const express = require("express");

const app = express();

app.use((req,res,next) => {
    console.log("1st");
    next();
})

app.use((req,res,next) => {
    console.log("2nd");
})
app.listen(3000, () => {
  console.log(`Server Running on http://localhost:3000`);
});
