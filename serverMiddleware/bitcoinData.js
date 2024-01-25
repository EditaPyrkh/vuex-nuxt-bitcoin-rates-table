const express = require("express");
const router = express.Router();

router.get("/:period", (req, res) => {
  const period = req.params.period;
  if (bitcoinData[period]) {
    res.json(bitcoinData[period]);
  } else {
    res.status(404).json({ error: "Data not found for the specified period" });
  }
});

module.exports = {
  path: "/api/bitcoinData",
  handler: router,
};
