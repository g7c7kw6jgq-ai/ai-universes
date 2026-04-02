import express from "express";

const app = express();

// ROOT ROUTE
app.get("/", (req, res) => {
  res.send("AI Universe is running 🚀");
});

// PORT
const PORT = process.env.PORT || 8080;

app.listen(PORT, "0.0.0.0", () => {
  console.log("Server running on port " + PORT);
});
