// 1. Toggle Dark/Light Mode
const themeToggle = document.createElement('button');
themeToggle.textContent = 'Toggle Dark/Light Mode';
themeToggle.style.position = 'fixed';
themeToggle.style.bottom = '10px';
themeToggle.style.right = '10px';
themeToggle.style.padding = '10px';
document.body.appendChild(themeToggle);

themeToggle.addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
});

// CSS for Dark Mode
const darkModeStyle = `
  body.dark-mode {
    background-color: #121212;
    color: #ffffff;
  }
  body.dark-mode header,
  body.dark-mode footer {
    background-color: #1e1e1e;
  }
  body.dark-mode .card {
    background-color: #1e1e1e;
    color: #ffffff;
  }
`;
const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerText = darkModeStyle;
document.head.appendChild(styleSheet);

const progressBar = document.createElement('div');
progressBar.style.position = 'fixed';
progressBar.style.top = '0';
progressBar.style.left = '0';
progressBar.style.width = '0';
progressBar.style.height = '4px';
progressBar.style.backgroundColor = '#3498db';
progressBar.style.zIndex = '1000';
document.body.appendChild(progressBar);

window.addEventListener('scroll', function() {
  const scrollTop = window.scrollY;
  const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercentage = (scrollTop / documentHeight) * 100;
  progressBar.style.width = `${scrollPercentage}%`;
});


// 3. Reveal Elements on Scroll
const revealElements = document.querySelectorAll('.card');
window.addEventListener('scroll', function() {
  revealElements.forEach(function(card) {
    const cardPosition = card.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;
    if (cardPosition < screenPosition) {
      card.classList.add('visible');
    } else {
      card.classList.remove('visible');
    }
  })
});

// CSS for reveal animations
const revealStyle = `
  .card {
    opacity: 0;
    transform: translateY(100px);
    transition: all 0.6s ease-out;
  }
  .card.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;
const revealStyleSheet = document.createElement('style');
revealStyleSheet.type = 'text/css';
revealStyleSheet.innerText = revealStyle;
document.head.appendChild(revealStyleSheet);

// 4. Scroll to Top Button
const scrollToTopButton = document.createElement('button');
scrollToTopButton.textContent = '⬆️';
scrollToTopButton.style.position = 'fixed';
scrollToTopButton.style.bottom = '50px';
scrollToTopButton.style.right = '10px';
scrollToTopButton.style.padding = '10px';
scrollToTopButton.style.display = 'none';
document.body.appendChild(scrollToTopButton);

window.addEventListener('scroll', function() {
  if (window.scrollY > 300) {
    scrollToTopButton.style.display = 'block';
  } else {
    scrollToTopButton.style.display = 'none';
  }
});

scrollToTopButton.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
