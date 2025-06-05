// Scroll Animation
const sections = document.querySelectorAll(".section");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in-view");
    }
  });
}, { threshold: 0.1 });

sections.forEach(section => {
  observer.observe(section);
});

// Form validation
document.querySelector('.contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = this.name.value.trim();
  const email = this.email.value.trim();
  const message = this.message.value.trim();

  if (name && email && message) {
    alert(`Thank you, ${name}! Your message has been sent.`);
    this.reset();
  } else {
    alert('Please fill out all fields before submitting.');
  }
});

// Theme toggle
const toggle = document.getElementById('theme-toggle');
const body = document.body;

// Detect saved theme or system preference
const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

// Function to update toggle icon
function updateToggleIcon() {
  if (body.classList.contains('dark')) {
    toggle.innerHTML = '<i class="fas fa-sun"></i>'; // sun icon in dark mode
  } else {
    toggle.innerHTML = '<i class="fas fa-moon"></i>'; // moon icon in light mode
  }
}

// Initial theme setup
if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
  body.classList.add('dark');
}
updateToggleIcon(); // Set icon on page load

// Toggle theme on button click
toggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
  updateToggleIcon(); // Update icon whenever theme toggles
});
