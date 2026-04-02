app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>AI Universe</title>
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: Arial, sans-serif;
          }

          body {
            background: #0d0d0d;
            color: white;
          }

          header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px 40px;
            border-bottom: 1px solid #222;
          }

          .logo {
            font-size: 22px;
            font-weight: bold;
            color: #9b5cff;
          }

          .nav {
            display: flex;
            gap: 20px;
          }

          .nav a {
            color: #ccc;
            text-decoration: none;
            font-size: 14px;
          }

          .nav a:hover {
            color: white;
          }

          .hero {
            text-align: center;
            margin-top: 120px;
          }

          .hero h1 {
            font-size: 48px;
            margin-bottom: 20px;
          }

          .hero span {
            color: #9b5cff;
          }

          .hero p {
            color: #aaa;
            margin-bottom: 30px;
          }

          .btn {
            padding: 12px 25px;
            background: #9b5cff;
            border: none;
            border-radius: 8px;
            color: white;
            font-size: 16px;
            cursor: pointer;
          }

          .btn:hover {
            background: #7a3fff;
          }

          .cards {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin-top: 80px;
            padding: 0 20px;
            flex-wrap: wrap;
          }

          .card {
            background: #161616;
            padding: 20px;
            border-radius: 12px;
            width: 250px;
            border: 1px solid #222;
          }

          .card h3 {
            margin-bottom: 10px;
          }

          .card p {
            color: #aaa;
            font-size: 14px;
          }
        </style>
      </head>

      <body>

        <header>
          <div class="logo">AI Universe</div>
          <div class="nav">
            <a href="#">Explore</a>
            <a href="#">Create</a>
            <a href="#">Login</a>
          </div>
        </header>

        <div class="hero">
          <h1>Build Your Own <span>AI Universe</span></h1>
          <p>Create, chat, and explore powerful AI characters.</p>
          <button class="btn">Get Started</button>
        </div>

        <div class="cards">
          <div class="card">
            <h3>🤖 AI Characters</h3>
            <p>Create and customize unique AI personalities.</p>
          </div>

          <div class="card">
            <h3>💬 Chat System</h3>
            <p>Talk with AI in real time with memory.</p>
          </div>

          <div class="card">
            <h3>⚡ Fast & Powerful</h3>
            <p>Built for speed and performance.</p>
          </div>
        </div>

      </body>
    </html>
  `);
});
