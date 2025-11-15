
        // Initialize Particles.js
        document.addEventListener('DOMContentLoaded', function() {
            particlesJS('particles-js', {
                particles: {
                    number: { value: 120, density: { enable: true, value_area: 1000 } },
                    color: { value: "#00f5ff" },
                    shape: { type: "circle" },
                    opacity: { value: 0.6, random: true },
                    size: { value: 4, random: true },
                    line_linked: {
                        enable: true,
                        distance: 180,
                        color: "#8a2be2",
                        opacity: 0.5,
                        width: 1.5
                    },
                    move: {
                        enable: true,
                        speed: 3,
                        direction: "none",
                        random: true,
                        straight: false,
                        out_mode: "out",
                        bounce: false
                    }
                },
                interactivity: {
                    detect_on: "canvas",
                    events: {
                        onhover: { enable: true, mode: "repulse" },
                        onclick: { enable: true, mode: "push" },
                        resize: true
                    }
                }
            });
            
            // Matrix Rain Effect
            const matrixCanvas = document.getElementById('matrixRain');
            const ctx = matrixCanvas.getContext('2d');
            
            matrixCanvas.width = window.innerWidth;
            matrixCanvas.height = window.innerHeight;
            
            const chars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
            const charArray = chars.split("");
            const fontSize = 14;
            const columns = matrixCanvas.width / fontSize;
            
            const drops = [];
            for (let i = 0; i < columns; i++) {
                drops[i] = 1;
            }
            
            function drawMatrix() {
                ctx.fillStyle = "rgba(5, 5, 8, 0.04)";
                ctx.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);
                
                ctx.fillStyle = "#00f5ff";
                ctx.font = fontSize + "px monospace";
                
                for (let i = 0; i < drops.length; i++) {
                    const text = charArray[Math.floor(Math.random() * charArray.length)];
                    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
                    
                    if (drops[i] * fontSize > matrixCanvas.height && Math.random() > 0.975) {
                        drops[i] = 0;
                    }
                    drops[i]++;
                }
            }
            
            setInterval(drawMatrix, 35);
            
            // Typing Effect
            const typingText = document.getElementById('typing-text');
            const texts = [
                "Architecting Digital Realities",
                "Crafting Immersive Experiences", 
                "Pushing Technological Boundaries",
                "Transforming Visions into Reality",
                "Engineering the Future of Interaction"
            ];
            let textIndex = 0;
            let charIndex = 0;
            let isDeleting = false;
            let typingSpeed = 100;
            
            function type() {
                const currentText = texts[textIndex];
                
                if (isDeleting) {
                    typingText.textContent = currentText.substring(0, charIndex - 1);
                    charIndex--;
                    typingSpeed = 50;
                } else {
                    typingText.textContent = currentText.substring(0, charIndex + 1);
                    charIndex++;
                    typingSpeed = 100;
                }
                
                if (!isDeleting && charIndex === currentText.length) {
                    isDeleting = true;
                    typingSpeed = 1500;
                } else if (isDeleting && charIndex === 0) {
                    isDeleting = false;
                    textIndex = (textIndex + 1) % texts.length;
                    typingSpeed = 500;
                }
                
                setTimeout(type, typingSpeed);
            }
            
            // Start typing effect
            setTimeout(type, 1000);
            
            // Animate skill bars when in view
            const skillBars = document.querySelectorAll('.skill-progress');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const width = entry.target.getAttribute('data-width');
                        entry.target.style.width = width + '%';
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });
            
            skillBars.forEach(bar => {
                observer.observe(bar);
            });
            
            // Smooth scrolling for navigation links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                });
            });
            
            // Navbar scroll effect
            window.addEventListener('scroll', function() {
                const navbar = document.getElementById('navbar');
                if (window.scrollY > 150) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            });
            
            // Theme toggle
            const themeToggle = document.getElementById('theme-toggle');
            if (themeToggle) {
                themeToggle.addEventListener('click', () => {
                    document.documentElement.classList.toggle('dark');
                    const icon = themeToggle.querySelector('i');
                    if (document.documentElement.classList.contains('dark')) {
                        icon.classList.remove('fa-sun');
                        icon.classList.add('fa-moon');
                    } else {
                        icon.classList.remove('fa-moon');
                        icon.classList.add('fa-sun');
                    }
                });
            }
            
            // Mobile menu toggle
            const menuToggle = document.getElementById('menu-toggle');
            const navLinks = document.querySelector('.hidden.md\\:flex');
            
            if (menuToggle && navLinks) {
                menuToggle.addEventListener('click', () => {
                    navLinks.classList.toggle('hidden');
                    navLinks.classList.toggle('flex');
                    navLinks.classList.toggle('flex-col');
                    navLinks.classList.toggle('absolute');
                    navLinks.classList.toggle('top-24');
                    navLinks.classList.toggle('left-0');
                    navLinks.classList.toggle('w-full');
                    navLinks.classList.toggle('bg-gray-900');
                    navLinks.classList.toggle('p-8');
                    navLinks.classList.toggle('space-y-6');
                });
            }
            
            // Handle window resize
            window.addEventListener('resize', function() {
                matrixCanvas.width = window.innerWidth;
                matrixCanvas.height = window.innerHeight;
            });
        });
    