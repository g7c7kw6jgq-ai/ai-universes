let userId = "";
let activeChar = "";

async function login() {
  const res = await fetch("/auth", {
    method: "POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify({
      username: document.getElementById("username").value,
      password: document.getElementById("password").value
    })
  });

  const data = await res.json();
  userId = data.userId;

  document.getElementById("auth").classList.add("hidden");
  document.getElementById("app").classList.remove("hidden");

  loadCharacters();
}

async function createCharacter() {
  await fetch("/create-character", {
    method: "POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify({
      userId,
      name: document.getElementById("charName").value,
      personality: document.getElementById("personality").value
    })
  });

  loadCharacters();
}

async function loadCharacters() {
  const res = await fetch("/get-characters", {
    method: "POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify({ userId })
  });

  const chars = await res.json();

  const charList = document.getElementById("charList");
  charList.innerHTML = "";

  chars.forEach(c => {
    const btn = document.createElement("button");
    btn.innerText = c.name;
    btn.onclick = () => selectChar(c._id, c.name);
    charList.appendChild(btn);
  });
}

function selectChar(id, name) {
  activeChar = id;

  document.getElementById("activeName").innerText = name;
  document.getElementById("chatSection").classList.remove("hidden");
}

// 🎤 VOICE INPUT
function startVoice() {
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = "en-US";

  recognition.start();

  recognition.onresult = function(event) {
    const voiceText = event.results[0][0].transcript;
    document.getElementById("msg").value = voiceText;
    sendMessage();
  };
}

// 🔊 VOICE OUTPUT
function speak(text) {
  const speech = new SpeechSynthesisUtterance(text);
  speech.rate = 0.95;
  window.speechSynthesis.speak(speech);
}

async function sendMessage() {
  const msgInput = document.getElementById("msg");
  const chatBox = document.getElementById("chatBox");

  const text = msgInput.value;

  if (!text) return;

  chatBox.innerHTML += `<p><b>You:</b> ${text}</p>`;

  const res = await fetch("/chat", {
    method: "POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify({
      charId: activeChar,
      message: text
    })
  });

  const data = await res.json();

  chatBox.innerHTML += `<p><b>AI:</b> ${data.reply}</p>`;
  chatBox.scrollTop = chatBox.scrollHeight;

  speak(data.reply);

  msgInput.value = "";
}
