const express = require("express");
const dbConnect = require("./config/dbConnect");

const port = 3000;

const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");

dbConnect();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./public"));
app.use(express.static("./my"));

app.get("/hello.html", (req,res)=>{res.send("hi")})
app.use("/contacts", require("./routes/contactRoutes-5"));


app.listen(port, () => {
  console.log(`${port}번 포트에서 서버 실행 중`);
});
