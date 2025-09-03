// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('change', function() {
    document.body.classList.toggle('dark-mode');
});

// Counter game functionality
const counterElement = document.getElementById('counter');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const resetBtn = document.getElementById('reset');
const doubleBtn = document.getElementById('double');

let count = 0;

function updateCounter() {
    counterElement.textContent = count;
    if (count > 0) {
        counterElement.style.color = '#2a9d8f';
    } else if (count < 0) {
        counterElement.style.color = '#e63946';
    } else {
        counterElement.style.color = 'var(--primary-color)';
    }
}

incrementBtn.addEventListener('click', function() {
    count++;
    updateCounter();
});

decrementBtn.addEventListener('click', function() {
    count--;
    updateCounter();
});

resetBtn.addEventListener('click', function() {
    count = 0;
    updateCounter();
});

doubleBtn.addEventListener('click', function() {
    count *= 2;
    updateCounter();
});
 // Mouse event demonstration
        const mouseBox = document.getElementById('mouseBox');
        const mouseLog = document.getElementById('mouseLog');
        
// Click event
        mouseBox.addEventListener('click', function(e) {
            this.classList.add('highlight');
            logEvent('Click at coordinates: ' + e.offsetX + ', ' + e.offsetY);
            setTimeout(() => this.classList.remove('highlight'), 500);
        });
        
 // Double click event
        mouseBox.addEventListener('dblclick', function(e) {
            this.textContent = 'Double clicked!';
            logEvent('Double click at coordinates: ' + e.offsetX + ', ' + e.offsetY);
            setTimeout(() => {
                this.textContent = 'Hover, click or double-click me!';
            }, 1000);
        });
        
 // Mouseover event
        mouseBox.addEventListener('mouseover', function() {
            logEvent('Mouse over');
            this.style.borderStyle = 'solid';
        });
        
 // Mouseout event
        mouseBox.addEventListener('mouseout', function() {
            logEvent('Mouse out');
            this.style.borderStyle = 'dashed';
        });
        
 // Mousemove event
        mouseBox.addEventListener('mousemove', function(e) {
            // Throttle the event logging for performance
            if (!this.lastMove || Date.now() - this.lastMove > 100) {
                logEvent('Mouse moving: ' + e.offsetX + ', ' + e.offsetY);
                this.lastMove = Date.now();
            }
        });
        
 // Context menu (right-click) event
        mouseBox.addEventListener('contextmenu', function(e) {
            e.preventDefault();
            logEvent('Right-click context menu');
            return false;
        });
        
 // Color options with click events
        document.querySelectorAll('.color-option').forEach(option => {
            option.addEventListener('click', function() {
                mouseBox.style.backgroundColor = this.getAttribute('data-color');
                logEvent('Color changed to: ' + this.getAttribute('data-color'));
            });
        });
        
 // Function to log events
        function logEvent(message) {
            const now = new Date();
            const timeString = now.toLocaleTimeString();
            mouseLog.innerHTML += `[${timeString}] ${message}<br>`;
            mouseLog.scrollTop = mouseLog.scrollHeight;
        }

// FAQ functionality
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', function() {
        const answer = this.nextElementSibling;
        const toggle = this.querySelector('.faq-toggle');

        answer.classList.toggle('open');
        toggle.textContent = answer.classList.contains('open') ? '−' : '+';
    });
});

// Form validation
const contactForm = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const messageInput = document.getElementById('message');
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');
const messageError = document.getElementById('message-error');
const successMessage = document.getElementById('success-message');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let isValid = true;

    nameError.style.display = 'none';
    emailError.style.display = 'none';
    passwordError.style.display = 'none';
    messageError.style.display = 'none';

    if (nameInput.value.trim() === '' || nameInput.value.length < 2) {
        nameError.style.display = 'block';
        isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        emailError.style.display = 'block';
        isValid = false;
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(passwordInput.value)) {
        passwordError.style.display = 'block';
        isValid = false;
    }

    if (messageInput.value.trim() === '') {
        messageError.style.display = 'block';
        isValid = false;
    }

    if (isValid) {
        successMessage.style.display = 'block';
        contactForm.reset();

        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 5000);
    }
});

// Real-time validation
nameInput.addEventListener('input', function() {
    if (this.value.trim() !== '' && this.value.length >= 2) {
        nameError.style.display = 'none';
    }
});

emailInput.addEventListener('input', function() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(this.value)) {
        emailError.style.display = 'none';
    }
});

passwordInput.addEventListener('input', function() {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (passwordRegex.test(this.value)) {
        passwordError.style.display = 'none';
    }
});

messageInput.addEventListener('input', function() {
    if (this.value.trim() !== '') {
        messageError.style.display = 'none';
    }
});
