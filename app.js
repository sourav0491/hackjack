const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const javaCompiler = require("./compiler/java");

//configuring body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello world!!!");
});

app.post("/compile/java", (req, res) => {
  let code = req.body.code;
  console.log(code);
  javaCompiler.compileCode(code, (err, data) => {
    if (err) res.json({ err });
    else res.json({ output: data });
  });
});

app.listen(3000, () => {
  console.log("App is listening on port 3000");
});
