const express = require("express");
const app = express();
app.use(express.static("./public"));
app.set("view engine", "ejs");
app.set("views", "./views");

const server = require("http").Server(app);
const io = require("socket.io")(server);
server.listen(3000, function () {
    console.log('listen port 3000');
});

io.on("connection", function (socket) {
    console.log('có người kết nối');
    socket.on("disconnect", function() {
        console.log('ngắt kết nối ' + socket.id);
    });
});

app.get("/", function(req, res) {
    res.render("trangchu");
});