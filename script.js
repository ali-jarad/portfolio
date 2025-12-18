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
