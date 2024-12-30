document.addEventListener('DOMContentLoaded', () => {
    // 背景音乐控制
    const musicBtn = document.querySelector('.music-btn');
    const bgMusic = document.getElementById('bgMusic');
    const musicPrompt = document.querySelector('.music-prompt');
    let isMusicPlaying = false;

    // 设置初始音量
    bgMusic.volume = 0.1;

    // 准备音频
    function prepareAudio() {
        bgMusic.load();
        bgMusic.currentTime = 0;
    }

    // 播放音频
    function playAudio() {
        bgMusic.play()
            .then(() => {
                isMusicPlaying = true;
                musicBtn.classList.add('playing');
                musicBtn.innerHTML = '<span class="bar1"></span><span class="bar2"></span><span class="bar3"></span>';
                // 隐藏引导遮罩
                musicPrompt.classList.add('hidden');
            })
            .catch(error => {
                console.log("Playback failed:", error);
            });
    }

    // 初始化音频
    prepareAudio();

    // 点击遮罩开始播放
    musicPrompt.addEventListener('click', () => {
        playAudio();
    });

    // 音乐播放控制函数
    function toggleMusic() {
        if (isMusicPlaying) {
            bgMusic.pause();
            musicBtn.classList.remove('playing');
            musicBtn.innerHTML = '♪';
        } else {
            playAudio();
        }
        isMusicPlaying = !isMusicPlaying;
    }

    // 添加点击事件监听器
    musicBtn.addEventListener('click', toggleMusic);

    // 监听音乐播放结束事件
    bgMusic.addEventListener('ended', () => {
        // 由于设置了loop属性，这个事件实际上不会触发
        musicBtn.classList.remove('playing');
        isMusicPlaying = false;
    });

    // 页面可见性改变时的处理
    document.addEventListener('visibilitychange', () => {
        if (document.hidden && isMusicPlaying) {
            bgMusic.pause();
            musicBtn.classList.remove('playing');
            isMusicPlaying = false;
        } else if (!document.hidden && isMusicPlaying) {
            playAudio();
        }
    });

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
                    }, index * 200); // 增加延迟时间到200ms
                });
            } else {
                // 当卡片区域离开视图时，移除动画类
                cards.forEach(card => {
                    card.classList.remove('animate');
                });
            }
        });
    }, {
        threshold: 0.5, // 增加阈值到0.5，确保更多内容可见时才触发
        rootMargin: '-50px 0px' // 调整触发位置
    });

    // 开始观察
    if (cardsSection) {
        cardsObserver.observe(cardsSection);
    }

    // 添加鼠标移动效果
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });

    // 移动端卡片翻转
    if (window.innerWidth <= 768) {
        const cards = document.querySelectorAll('.info-card');

        cards.forEach(card => {
            card.addEventListener('click', () => {
                // 如果其他卡片正在翻转，先重置它们
                cards.forEach(otherCard => {
                    if (otherCard !== card && otherCard.classList.contains('flipped')) {
                        otherCard.classList.remove('flipped');
                    }
                });

                // 翻转当前卡片
                card.classList.toggle('flipped');
            });
        });

        // 添加触摸结束事件来改善移动端体验
        cards.forEach(card => {
            card.addEventListener('touchend', (e) => {
                e.preventDefault(); // 防止触发点击事件

                // 如果其他卡片正在翻转，先重置它们
                cards.forEach(otherCard => {
                    if (otherCard !== card && otherCard.classList.contains('flipped')) {
                        otherCard.classList.remove('flipped');
                    }
                });

                // 翻转当前卡片
                card.classList.toggle('flipped');
            });
        });
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

    // Mobile card stack functionality
    function initializeCardStack() {
        if (window.innerWidth <= 768) {
            const cards = document.querySelectorAll('.info-card');
            cards.forEach((card, index) => {
                card.classList.add(`stacked-${index + 1}`);
            });

            cards.forEach(card => {
                card.addEventListener('click', () => {
                    if (window.innerWidth <= 768) {
                        const currentPosition = parseInt(card.className.match(/stacked-(\d)/)[1]);
                        card.classList.add('moving-down');

                        setTimeout(() => {
                            cards.forEach(c => {
                                const pos = parseInt(c.className.match(/stacked-(\d)/)[1]);
                                c.classList.remove(`stacked-${pos}`);
                                let newPos = pos - 1;
                                if (newPos < 1) newPos = 4;
                                if (c === card) newPos = 4;
                                c.classList.add(`stacked-${newPos}`);
                            });
                            card.classList.remove('moving-down');
                        }, 500);
                    }
                });
            });
        }
    }

    // Initialize card stack on load and resize
    window.addEventListener('load', initializeCardStack);
    window.addEventListener('resize', initializeCardStack);
});
