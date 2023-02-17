const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server


const connect = function () {
  const conn = net.createConnection({
    host: IP,// IP address here,
    port: PORT// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  //Print a message to the screen when the connection is successfully established.
  conn.on("connect",() => {
    console.log("Successfully connected to game server");
    conn.write("Name: Clo");
    conn.write("Say: go long");
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

module.exports = {
  connect,
};