import express from "express";

const app = express();

// ROOT ROUTE
app.get("/", (req, res) => {
  res.send("AI Universe is running 🚀");
});

// IMPORTANT: use Railway port ONLY
const PORT = process.env.PORT;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
