// stores the active TCP connection object
let connection;

// setup interface to handle user input from stdin
const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function(data) {
  switch (data) {
  case "\u0003": // \u0003 maps to ctrl+c input
    process.exit();
    break;
  case "w":
    connection.write("Move: up");
    break;
  case "a":
    connection.write("Move: left");
    break;
  case "s":
    connection.write("Move: down");
    break;
  case "d":
    connection.write("Move: right");
    break;
  case "p":
    connection.write("Say: phew");
    break;
  case "h":
    connection.write("Say: hiss");
    break;
  case "y":
    connection.write("Say: yum");
    break;
  }
};

module.exports = { setupInput };