// Classic Academic Research Webpage Script

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const targetTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', targetTheme);
  localStorage.setItem('academic-theme', targetTheme);
}

function initTheme() {
  const savedTheme = localStorage.getItem('academic-theme');
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
  }
}

function toggleAbstract(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.style.display = el.style.display === 'block' ? 'none' : 'block';
}

function toggleBibtex(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.style.display = el.style.display === 'block' ? 'none' : 'block';
}

function copyBibtex(id, btn) {
  const el = document.getElementById(id);
  if (!el) return;
  const pre = el.querySelector('pre');
  if (!pre) return;

  navigator.clipboard.writeText(pre.innerText).then(() => {
    const originalText = btn.innerText;
    btn.innerText = 'Copied!';
    setTimeout(() => {
      btn.innerText = originalText;
    }, 2000);
  });
}

document.addEventListener('DOMContentLoaded', initTheme);
