import express from "express";

const app = express();

// ROOT ROUTE (fixes your error)
app.get("/", (req, res) => {
  res.send("AI Universe is running 🚀");
});

// OPTIONAL TEST ROUTE
app.get("/api", (req, res) => {
  res.json({ message: "API working ✅" });
});

// PORT (Railway uses this automatically)
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
