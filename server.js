import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>AI Universe</title>
      <style>
        body {
          margin: 0;
          font-family: Arial, sans-serif;
          background: #0d0d0d;
          color: white;
        }

        .navbar {
          display: flex;
          justify-content: space-between;
          padding: 20px;
          background: #111;
          border-bottom: 1px solid #222;
        }

        .logo {
          font-weight: bold;
          font-size: 20px;
        }

        .nav-links a {
          margin-left: 20px;
          color: #aaa;
          text-decoration: none;
        }

        .hero {
          text-align: center;
          padding: 100px 20px;
        }

        .hero h1 {
          font-size: 40px;
        }

        .hero p {
          color: #aaa;
          margin-top: 10px;
        }

        .btn {
          margin-top: 20px;
          padding: 12px 24px;
          background: purple;
          border: none;
          color: white;
          border-radius: 8px;
          cursor: pointer;
        }

        .cards {
          display: flex;
          justify-content: center;
          gap: 20px;
          padding: 40px;
          flex-wrap: wrap;
        }

        .card {
          background: #111;
          padding: 20px;
          border-radius: 10px;
          width: 250px;
          border: 1px solid #222;
        }
      </style>
    </head>

    <body>
      <div class="navbar">
        <div class="logo">AI Universe 🚀</div>
        <div class="nav-links">
          <a href="#">Explore</a>
          <a href="#">Create</a>
          <a href="#">Login</a>
        </div>
      </div>

      <div class="hero">
        <h1>Build Your Own AI Universe</h1>
        <p>Create, customize, and chat with AI characters</p>
        <button class="btn">Get Started</button>
      </div>

      <div class="cards">
        <div class="card">
          <h3>🤖 AI Characters</h3>
          <p>Create unique personalities</p>
        </div>

        <div class="card">
          <h3>💬 Chat System</h3>
          <p>Talk in real-time</p>
        </div>

        <div class="card">
          <h3>🌌 Infinite Worlds</h3>
          <p>Build your universe</p>
        </div>
      </div>
    </body>
    </html>
  `);
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, "0.0.0.0", () => {
  console.log("Server running on port " + PORT);
});
