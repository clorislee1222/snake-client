const net = require("net");

// establishes a connection with the game server


const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',// IP address here,
    port: 50541// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  //Print a message to the screen when the connection is successfully established.
  conn.on("connect",() => {
    console.log("Successfully connected to game server");
    conn.write("Name: Clo");
  });

  // //Send the string "Move: up" as data to the server
  // conn.on("connect",() => {
  //   conn.write("Move: up");
  // });

  //Print incoming data
  conn.on("data", (data) => {
    console.log(data);
  })

  return conn;
};

console.log("Connecting ...");

module.exports = connect;