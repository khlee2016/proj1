const express = require("express");
const app = express();
app.use(express.urlencoded({extended:true}));

const port = 3000;

app.get("/", (req, res) => {
  res.status(200).send("Hello Node!");
});

app.use("/contacts", require("./routes/contactRoutes-2"));

app.listen(port, () => {
  console.log(`${port}번 포트에서 서버 실행 중`);
});
