document.addEventListener('DOMContentLoaded', () => {
    // Menu handling
    const menuBtn = document.querySelector('.menu-btn');
    const menuOverlay = document.querySelector('.menu-overlay');
    let isMenuOpen = false;

    menuBtn.addEventListener('click', () => {
        isMenuOpen = !isMenuOpen;
        menuBtn.textContent = isMenuOpen ? 'MENU -' : 'MENU +';
        menuOverlay.classList.toggle('active');
        document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    });

    // Enhanced parallax effect for bike images
    const bikeImages = document.querySelector('.bike-images');
    const bikeImageElements = document.querySelectorAll('.bike-image');
    let lastScrollTop = 0;
    let ticking = false;

    window.addEventListener('scroll', () => {
        lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (!ticking) {
            window.requestAnimationFrame(() => {
                updateParallaxEffect(lastScrollTop);
                ticking = false;
            });
            ticking = true;
        }
    });

    function updateParallaxEffect(scrollTop) {
        bikeImageElements.forEach((image) => {
            // 检查图片是否在文字上方（z-index为3的图片）
            const isTopLayer = window.getComputedStyle(image).zIndex === '3';
            
            // 文字上方的图片速度更快
            const speed = isTopLayer ? 0.8 : 0.3;
            
            // 所有图片都向上移动（使用负值）
            const translateY = -scrollTop * speed;
            const randomOffset = Math.sin(scrollTop * 0.001) * 5;
            
            image.style.transform = `translateY(${translateY + randomOffset}px)`;
            
            // 调整透明度
            const opacity = Math.max(0.8, 1 - (Math.abs(translateY) * 0.0005));
            image.style.opacity = opacity;
        });
    }

    // Add hover effect to bike images
    bikeImageElements.forEach(image => {
        image.addEventListener('mouseenter', () => {
            image.style.transform = 'scale(1.05)';
            image.style.opacity = '1';
        });

        image.addEventListener('mouseleave', () => {
            image.style.transform = 'scale(1)';
            image.style.opacity = '0.8';
        });
    });

    // Smooth scroll with enhanced behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition - headerOffset;

                window.scrollBy({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                if (isMenuOpen) {
                    menuBtn.click();
                }
            }
        });
    });

    // Enhanced scroll animations
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                if (entry.target.classList.contains('reason')) {
                    entry.target.style.transitionDelay = `${entry.target.dataset.delay}s`;
                }
            }
        });
    }, observerOptions);

    // Add fade-in animation to sections with sequential delay
    document.querySelectorAll('section').forEach((section, index) => {
        section.classList.add('fade-in');
        section.style.transitionDelay = `${index * 0.2}s`;
        observer.observe(section);
    });

    // Add sequential animation to reasons
    document.querySelectorAll('.reason').forEach((reason, index) => {
        reason.classList.add('fade-in');
        reason.dataset.delay = index * 0.2;
        observer.observe(reason);
    });

    // Add loading animation
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');

        // Trigger initial animations
        setTimeout(() => {
            document.querySelectorAll('.fade-in').forEach(el => {
                el.classList.add('visible');
            });
        }, 500);
    });

    // 卡片动画控制
    const cards = document.querySelectorAll('.info-card');
    const cardsSection = document.querySelector('.cards-deck');

    // 创建观察器
    const cardsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 当卡片区域进入视图时，依次添加动画类
                cards.forEach((card, index) => {
                    setTimeout(() => {
                        card.classList.add('animate');
                    }, index * 150); // 每张卡片延迟150ms
                });
            } else {
                // 当卡片区域离开视图时，移除动画类
                cards.forEach(card => {
                    card.classList.remove('animate');
                });
            }
        });
    }, {
        threshold: 0.3, // 当30%的内容可见时触发
        rootMargin: '0px 0px -100px 0px' // 提前触发动画
    });

    // 开始观察
    if (cardsSection) {
        cardsObserver.observe(cardsSection);
    }

    // Carousel functionality
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    let currentIndex = 0;
    let isAnimating = false;

    function initCarousel() {
        updateSlideClasses();
    }

    function updateSlideClasses() {
        slides.forEach((slide, index) => {
            slide.classList.remove('active', 'prev', 'next');
            if (index === currentIndex) {
                slide.classList.add('active');
            } else if (index === getPrevIndex()) {
                slide.classList.add('prev');
            } else if (index === getNextIndex()) {
                slide.classList.add('next');
            }
        });
    }

    function getPrevIndex() {
        return (currentIndex - 1 + slides.length) % slides.length;
    }

    function getNextIndex() {
        return (currentIndex + 1) % slides.length;
    }

    function moveSlide(direction) {
        if (isAnimating) return;
        isAnimating = true;

        if (direction === 'next') {
            currentIndex = getNextIndex();
        } else {
            currentIndex = getPrevIndex();
        }

        updateSlideClasses();

        // Reset animation flag after transition
        setTimeout(() => {
            isAnimating = false;
        }, 500);
    }

    // Event listeners
    prevBtn.addEventListener('click', () => moveSlide('prev'));
    nextBtn.addEventListener('click', () => moveSlide('next'));

    // Auto advance carousel
    let autoAdvance = setInterval(() => moveSlide('next'), 5000);

    // Pause auto-advance on hover
    carousel.addEventListener('mouseenter', () => clearInterval(autoAdvance));
    carousel.addEventListener('mouseleave', () => {
        autoAdvance = setInterval(() => moveSlide('next'), 5000);
    });

    // Touch support
    let touchStartX = 0;
    let touchEndX = 0;

    carousel.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
        clearInterval(autoAdvance);
    });

    carousel.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
        autoAdvance = setInterval(() => moveSlide('next'), 5000);
    });

    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                moveSlide('next');
            } else {
                moveSlide('prev');
            }
        }
    }

    // Keyboard navigation
    document.addEventListener('keydown', e => {
        if (e.key === 'ArrowLeft') {
            moveSlide('prev');
        } else if (e.key === 'ArrowRight') {
            moveSlide('next');
        }
    });

    // Initialize carousel
    initCarousel();
});