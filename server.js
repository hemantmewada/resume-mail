const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const sendEMail = require("./helper/sendEMail");
const app = express();
dotenv.config();
const PORT = process.env.PORT || 3002;
app.use(express.json());
app.use(cors());

// this  is home route
app.get("/", (req, res) => {
  res.send("app is working...!");
});
app.post("/send", async (req, res) => {
  const { to, subject, text, html } = req.body;
  const mail = await sendEMail(to, subject, text, html);
  if (mail) {
    return res.json(mail);
  } else {
    return res.json("");
  }
});

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
