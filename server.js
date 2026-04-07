const express = require("express");
const app = express();

// Home route
app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

// 👉 ADD THIS API ROUTE
app.get("/api", (req, res) => {
  res.json({ message: "API working" });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});