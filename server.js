const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const morgan = require("morgan");
const markdownRoutes = require("./routes/markdown.route");

const app = express();
require("dotenv").config();

// Middleware
const corsOptions = {
    origin: ["http://localhost:5173"], // Allow only your frontend (React app)
    methods: ["GET", "POST"], // Restrict to these methods
    allowedHeaders: ["Content-Type"], // Only allow certain headers
};
  
app.use(cors(corsOptions)); // Apply CORS configuration
app.use(express.json());
app.use(helmet()); // Adds security headers
app.use(morgan("dev")); // Logs API requests

// Rate Limiting to prevent abuse (limits requests to 100 per 15 minutes)
const limiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 minutes
  max: 100, // Limit each IP to 100 requests
  message: "Too many requests, please try again later.",
});
app.use(limiter);

// Routes
app.use("/", markdownRoutes);

// Global Error Handling Middleware
app.use((err, req, res, next) => {
  console.error("Internal Server Error:", err);
  res.status(err.status || 500).json({
    error: err.message || "Something went wrong, please try again.",
  });
});

// Start Server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
