const express = require("express");
const { body, validationResult } = require("express-validator");
const { marked } = require("marked");

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Server is running...");
});

// POST: Convert Markdown to HTML
router.post(
  "/convert",
  [
    body("markdown").notEmpty().withMessage("Markdown content is required"),
  ],
  (req, res, next) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { markdown } = req.body;
      const html = marked(markdown);
      res.status(200).json({ message:"Data Converted Successfully", html });
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
