document.addEventListener('DOMContentLoaded', () => {
            // Scroll reveal animation
            const revealElements = document.querySelectorAll('.reveal');
            const revealObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        revealObserver.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });

            revealElements.forEach(el => revealObserver.observe(el));

            // Skill bars animation
            const skillBars = document.querySelectorAll('.progress-fill');
            const skillObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const targetWidth = entry.target.getAttribute('data-width');
                        const delay = entry.target.dataset.delay || 0;
                        setTimeout(() => {
                            entry.target.style.width = targetWidth;
                        }, delay);
                        skillObserver.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.3 });

            skillBars.forEach((bar, index) => {
                bar.dataset.delay = index * 80; // 80ms stagger
                skillObserver.observe(bar);
            });
        });