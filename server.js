import express from "express";

const app = express();

/* ================= HOME PAGE ================= */
app.get("/", (req, res) => {
  res.send(`<!DOCTYPE html>
<html>
<head>
  <title>AI Universe</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
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
      padding: 80px 20px;
    }

    .hero h1 {
      font-size: 36px;
    }

    .hero p {
      color: #aaa;
      margin-top: 10px;
    }

    .btn {
      margin-top: 20px;
      padding: 12px 24px;
      background: #7c3aed;
      border: none;
      color: white;
      border-radius: 8px;
      cursor: pointer;
      font-weight: bold;
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
      text-align: center;
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
    <button class="btn" onclick="window.location.href='/chat'">Get Started</button>
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
</html>`);
});

/* ================= CHAT PAGE ================= */
app.get("/chat", (req, res) => {
  res.send(`<!DOCTYPE html>
<html>
<head>
  <title>Chat</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      margin: 0;
      background: #0d0d0d;
      color: white;
      font-family: Arial;
      display: flex;
      flex-direction: column;
      height: 100vh;
    }

    .chat-box {
      flex: 1;
      padding: 20px;
      overflow-y: auto;
    }

    .message {
      margin-bottom: 10px;
    }

    .user {
      text-align: right;
      color: #7c3aed;
    }

    .ai {
      text-align: left;
      color: #aaa;
    }

    .input-area {
      display: flex;
      padding: 10px;
      background: #111;
    }

    input {
      flex: 1;
      padding: 10px;
      border: none;
      border-radius: 5px;
    }

    button {
      margin-left: 10px;
      padding: 10px;
      background: purple;
      border: none;
      color: white;
      border-radius: 5px;
    }
  </style>
</head>

<body>
  <div class="chat-box" id="chat"></div>

  <div class="input-area">
    <input id="input" placeholder="Type a message..." />
    <button onclick="sendMessage()">Send</button>
  </div>

  <script>
    function sendMessage() {
      const input = document.getElementById("input");
      const chat = document.getElementById("chat");

      const userMsg = input.value;
      if (!userMsg) return;

      chat.innerHTML += "<div class='message user'>" + userMsg + "</div>";

      setTimeout(() => {
        chat.innerHTML += "<div class='message ai'>AI: I see you said '" + userMsg + "'</div>";
        chat.scrollTop = chat.scrollHeight;
      }, 500);

      input.value = "";
    }
  </script>
</body>
</html>`);
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, "0.0.0.0", () => {
  console.log("Server running on port " + PORT);
});
