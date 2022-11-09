const express = require("express");
const router = express.Router();

const { getUser, createUser } = require("../controllers/User");

router.get("/", async (req, res) => {
  try {
    let { username, password } = req.query;
    if (!username || !password) return res.sendStatus(400);
    let data = await getUser(username, password);
    return res.json(data);
  } catch (e) {
    res.sendStatus(404);
  }
});

router.post("/", async (req, res) => {
  try {
    let { username, email, password } = req.body;
    if (!username || !email || !password) return res.sendStatus(400);
    let data = await createUser(username, password, email);
    return res.json(data);
  } catch (e) {
    console.error(e.toString());
    if (e.toString().includes("Invalid registration")) return res.sendStatus(500);
    if (e.toString().includes("Email")) return res.sendStatus(402);
    res.sendStatus(404);
  }
});

module.exports = router;