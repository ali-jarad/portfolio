<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Ali Jarad | Portfolio</title>
  <link rel="stylesheet" href="style.css" />
  

</head>
<script src="script.js"></script>
</body>

<body>
  <header class="site-header">
    <h1>Ali Jarad</h1>
    <p class="subtitle">Computer Science Student | Web Developer (Entry-Level)</p>
    <nav class="top-nav" aria-label="Primary">
  <a href="#about">About</a>
  <a href="#skills">Skills</a>
  <a href="#projects">Projects</a>
  <a href="#contact">Contact</a>
</nav>

  </header>

  <main class="container">
    <section class="card" id="about">
      <h2>About</h2>
      <p>
        I’m a Computer Science student at Applied Science University (Jordan). I’m focused on strengthening
        fundamentals, algorithms, and web development through consistent daily practice. I also work on
        improving focus, time management, and healthy balance, aiming for long-term career and financial stability.
      </p>
    </section>

    <section class="card" id="skills">
      <h2>Skills</h2>
      <ul class="list">
        <li><strong>Programming (Basics):</strong> Python, Java, C++, HTML, CSS, JavaScript</li>
        <li><strong>Python Fundamentals:</strong> loops, functions, lists, strings, conditions; problem-solving</li>
        <li><strong>File Handling (Basic):</strong> read/write text files for simple progress saving</li>
        <li><strong>Git & GitHub (Basic):</strong> repos, clone, terminal navigation, diffs</li>
        <li><strong>Algorithms & DS (Foundations):</strong> Big-O, recursion, sorting (Insertion/Bubble/Merge)</li>
        <li><strong>Web Development (Entry-level):</strong> multi-page structure and styling with HTML/CSS</li>
        <li><strong>Execution (In progress):</strong> weekly schedule, time management, consistency</li>
      </ul>
    </section>

    <section class="card" id="projects" >
      <h2>Projects</h2>
    <div class="project-grid">
      <div class="project">
        <h3>Habit Tracker (Console)</h3>
        <p class="meta">Python • File Saving (Text)</p>
        <p>
          A simple habit-tracking app to log daily habits and maintain consistency. Includes basic file saving to store progress.
        </p>
        <ul class="list">
          <li>Add habits and mark daily completion</li>
          <li>View a simple progress summary</li>
          <li>Save/load progress (basic)</li>
        </ul>
            <button type="button" class="View" data-url="https://github.com/ali-s-jarad">View Project</button>
      </div>

      <div class="project">
        <h3>Multi-Page Website (Phase 1)</h3>
        <p class="meta">HTML • CSS</p>
        <p>
          A multi-page website prototype with structured navigation and consistent layout across sections.
        </p>
        <ul class="list">
          <li>Multi-page structure with a navigation menu</li>
          <li>Consistent styling foundation</li>
          <li>Responsive-ready layout approach</li>
        </ul>
        <button type="button" class="View" data-url="https://github.com/ali-s-jarad">View Project</button>
      </div>
      <div class="project"> 
        <h3>Mini To-Do</h3>
        <p class="meta">JavaScript • DOM Manipulation</p>
        <p> A simple multi-section web page that displays your weekly routine (study, coding, meals, workout) in a clear layout. Designed to practice structure, styling, and consistent navigation/formatting.</p>
        <ul class="list">
          <li>Multi-section layout for different daily activities</li>
          <li>Consistent navigation and formatting</li>
          <li>Basic interactivity with JavaScript</li>
        </ul>
        <button type="button" class="View" data-url="https://github.com/ali-s-jarad">View Project</button>
      </div>
      <div class="project">
        <h3>Weekly Schedule Page</h3>
        <p class="meta">HTML • CSS</p>
        <p>
          A simple multi-section web page that displays your weekly routine (study, coding, meals, workout) in a clear layout. Designed to practice structure, styling, and consistent navigation/formatting.
        </p>
        <ul class="list">
          <li>Multi-section layout for different daily activities</li>
          <li>Consistent navigation and formatting</li>
          <li>Basic interactivity with JavaScript</li>
        </ul>
        <button type="button" class="View" data-url="https://github.com/ali-s-jarad">View Project</button>
      </div>
    </div>
    </section>

    <section class="card" id="contact" >
      <h2>Contact</h2>
      <p>Email: <a href="mailto:ali.s.jarad103@gmail.com">ali.s.jarad103@gmail.com</a>
        <button type="button" class="View" onclick="copyEmail()">Copy</button></p>

      <p>LinkedIn: <a href="https://www.linkedin.com/in/ali-jarad-103/" target="_blank" rel="noopener">Ali Jarad</a></p>
      <p>GitHub: <a href="https://github.com/ali-jarad" target="_blank" rel="noopener">ali-jarad</a></p>
    </section>
  </main>

  <footer class="site-footer">
    <p>© <span id="year"></span> Ali Jarad</p>
  </footer>


  
  <div class="toast" id="toast" role="status" aria-live="polite"></div>
    <script src="script.js"></script>
</body>
</html>
------------------------------------------------------------------------------------------------------------
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  background-color: lavender;
  color: #333;
  font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
  line-height: 1.6;
}

.site-header {
  max-width: 900px;
  margin: 24px auto 0;
  padding: 0 16px;
  text-align: center;
}

.site-header h1 {
  margin: 0;
}

.subtitle {
  margin: 8px 0 0;
  opacity: 0.85;
}

.container {
  max-width: 900px;
  margin: 18px auto 40px;
  padding: 0 16px;
  display: grid;
  gap: 16px;
}

.card {
  background: rgba(255, 255, 255, 0.75);
  border-radius: 12px;
  padding: 16px;
}

.list {
  margin: 10px 0 0;
  padding-left: 18px;
}

.project {
  margin-top: 14px;
  padding-top: 14px;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
}

.project:first-of-type {
  margin-top: 0;
  padding-top: 0;
  border-top: 0;
}

.meta {
  margin: 6px 0 8px;
  opacity: 0.8;
  font-size: 0.95rem;
}

a {
  color: inherit;
}

.site-footer {
  max-width: 900px;
  margin: 0 auto 24px;
  padding: 0 16px;
  text-align: center;
  opacity: 0.8;
}
a:hover {
  text-decoration: underline;
}
button.View {
  background-color: #6a5acd;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1rem;
}
button.View:hover {
  background-color: #5848c2;
  font-size: 1.05rem;
}
.top-nav {
  margin-top: 12px;
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
}

.top-nav a {
  text-decoration: none;
  padding: 8px 12px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.55);
}

.top-nav a:hover {
  text-decoration: underline;
}

.project-grid {
  display: grid;
  gap: 14px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin-top: 10px;
}

@media (max-width: 700px) {
  .project-grid {
    grid-template-columns: 1fr;
  }
}

.project {
  border-top: 0;
  margin-top: 0;
  padding-top: 0;
  background: rgba(255, 255, 255, 0.55);
  border-radius: 12px;
  padding: 14px;
}

button.View.small {
  padding: 8px 12px;
  font-size: 0.95rem;
}

.toast {
  position: fixed;
  left: 50%;
  bottom: 18px;
  transform: translateX(-50%);
  background: rgba(20, 20, 20, 0.92);
  color: #fff;
  padding: 10px 14px;
  border-radius: 12px;
  opacity: 0;
  pointer-events: none;
  transition: opacity 200ms ease;
  max-width: 90vw;
}

.toast.show {
  opacity: 1;
}
----------------------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  // Footer year (لو موجود)
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // فتح روابط المشاريع
  document.querySelectorAll('button.View[data-url]').forEach((btn) => {
    btn.addEventListener("click", () => {
      const url = btn.dataset.url;
      if (!url) return;
      window.open(url, "_blank", "noopener");
    });
  });

  // Toast (إن وُجد)
  const toastEl = document.getElementById("toast");
  let t = null;
  const showToast = (msg) => {
    if (!toastEl) {
      alert(msg);
      return;
    }
    toastEl.textContent = msg;
    toastEl.classList.add("show");
    clearTimeout(t);
    t = setTimeout(() => toastEl.classList.remove("show"), 1600);
  };

  // Copy email (مع fallback للملفات المحلية file://)
  const copyBtn = document.getElementById("copyEmailBtn");
  copyBtn?.addEventListener("click", async () => {
    const email = "ali.s.jarad103@gmail.com";

    // 1) Modern API (يعمل على HTTPS/localhost)
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(email);
        showToast("Email copied.");
        return;
      } catch {}
    }

    // 2) Fallback (يعمل غالبًا حتى على file://)
    try {
      const ta = document.createElement("textarea");
      ta.value = email;
      ta.style.position = "fixed";
      ta.style.left = "-9999px";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      showToast("Email copied.");
    } catch {
      showToast("Copy failed.");
    }
  });
});
