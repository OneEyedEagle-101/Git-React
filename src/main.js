const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());

const { selectAllUser, addUser } = require("./user");

app.get("/user", async (req, res) => {
  const list = await selectAllUser();
  res.json(list);
});

app.post("/add-user", async (req, res) => {
  const user = req.body;
  addUser(user);
  res.json({message:"ADDED user Sucessfully"});
});

app.listen(4000, () => "Recieved Data Sucessfully");
