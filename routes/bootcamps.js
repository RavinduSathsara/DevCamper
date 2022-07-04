const express = require("express");
const router = express.Router();

router.get("", (req, res) => {
  res.status(400).json({ sucess: true, dsg: "Show all bootcamps" });
});
router.get("/:id", (req, res) => {
  res
    .status(400)
    .json({ sucess: true, dsg: `Get  bootcamp id ${req.params.id}` });
});

router.post("", (req, res) => {
  res.status(400).json({ sucess: true, dsg: "Create all bootcamps" });
});

router.put("/:id", (req, res) => {
  res
    .status(400)
    .json({ sucess: true, dsg: `Update bootcamp id ${req.params.id}` });
});

router.delete("/:id", (req, res) => {
  res
    .status(400)
    .json({ sucess: true, dsg: `Delete bootcamp id ${req.params.id}` });
});

module.exports = router;
