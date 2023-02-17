// Stores the active TCP connection object.
let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};

const handleUserInput = function (key) {
  // your code here
  switch (key) {
    case 'w':
      console.log('Move: up');
      break;
  
    case 'a':
      console.log('Move: left');
      break;

    case 's':
      console.log('Move: down');
      break;

    case 'd':
      console.log('Move: right');
      break;  

    case '\u0003':
      process.exit();
      break;

    default:
      break;
  }
};

module.exports = {
  setupInput,
};