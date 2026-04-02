import express from "express";

const app = express();

app.use(express.json());

/* ===== AI ROUTE ===== */
app.post("/api/chat", async (req, res) => {
  const message = req.body.message;

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + process.env.OPENAI_API_KEY
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: message }]
      })
    });

    const data = await response.json();
    const reply = data.choices[0].message.content;

    res.json({ reply });

  } catch (err) {
    res.json({ reply: "Error talking to AI" });
  }
});

/* ===== CHAT PAGE ===== */
app.get("/", (req, res) => {
  res.send(`<!DOCTYPE html>
<html>
<head>
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
async function sendMessage() {
  const input = document.getElementById("input");
  const chat = document.getElementById("chat");

  const userMsg = input.value;
  if (!userMsg) return;

  chat.innerHTML += "<div class='message user'>" + userMsg + "</div>";

  const res = await fetch("/api/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ message: userMsg })
  });

  const data = await res.json();

  chat.innerHTML += "<div class='message ai'>" + data.reply + "</div>";
  chat.scrollTop = chat.scrollHeight;

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
      
      
