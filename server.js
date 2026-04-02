import express from "express";

const app = express();

// root route
app.get("/", (req, res) => {
  res.send("AI Universe is running 🚀");
});

// IMPORTANT FIX
const PORT = process.env.PORT || 8080;

// listen on ALL interfaces
app.listen(PORT, "0.0.0.0", () => {
  console.log("Server running on port " + PORT);
});
