function compileCode(code, cb) {
  let fs = require("fs");
  let output;
  fs.writeFile("Main.java", code, (err) => {
    if (err) throw err;
    let spawn = require("child_process").spawn;
    let compile = spawn("java", ["Main.java"]);
    compile.stdout.on("data", function(data) {
      cb(null, String(data));
    });

    compile.stderr.on("data", function(data) {
      cb(String(data));
    });
  });
}

module.exports.compileCode = compileCode;
