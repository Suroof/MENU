:root {
    --mint: #7FFFD4;
    --blue: #4169E1;
    --white: #e4d9d9;
    --dark: #1A1A1A;
    --orange: #FF6B6B;
    --yellow: #FFD700;
    --coral: #FF7F50;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html,
body {
    min-height: 100vh;
    width: 100%;
    margin: 0;
    padding: 0;
}

body {
    background-image: linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url('../images/background.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    background-repeat: no-repeat;
    color: var(--white);
    font-family: 'Montserrat', sans-serif;
    position: relative;
}

body::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url('../images/background.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: -1;
}

main {
    position: relative;
    z-index: 1;
    min-height: 100vh;
}

section {
    position: relative;
    z-index: 1;
    background-color: rgba(26, 26, 26, 0.7);
}

.hero {
    background-color: transparent;
}

.services {
    background-color: rgba(26, 26, 26, 0.5);
}

.why-choose {
    background-color: rgba(26, 26, 26, 0.5);
}

.art-on-wheels {
    background-color: rgba(26, 26, 26, 0.5);
}

.contact {
    background-color: rgba(26, 26, 26, 0.3);
}

.faq {
    background-color: rgba(26, 26, 26, 0.5);
}

/* Header Styles */
header {
    padding: 20px 40px;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
    background: rgba(26, 26, 26, 0.9);
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1440px;
    margin: 0 auto;
}

.email a {
    color: var(--white);
    font-size: 14px;
    text-decoration: none;
    letter-spacing: 1px;
}

.logo img {
    height: 40px;
    transition: transform 0.3s ease;
}

.logo img:hover {
    transform: scale(1.05);
}

.nav-right {
    display: flex;
    align-items: center;
    gap: 30px;
}

.language {
    display: flex;
    gap: 15px;
}

.language a {
    color: var(--white);
    text-decoration: none;
    font-size: 14px;
    opacity: 0.7;
    transition: opacity 0.3s ease;
}

.language a.active {
    opacity: 1;
    font-weight: bold;
}

.menu-btn {
    background: none;
    border: none;
    color: var(--white);
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    letter-spacing: 1px;
    transition: transform 0.3s ease;
}

.menu-btn:hover {
    transform: scale(1.05);
}

.music-btn {
    position: relative;
    width: 30px;
    height: 30px;
    background: none;
    border: none;
    color: white;
    font-size: 24px;
    cursor: pointer;
    transition: transform 0.3s ease;
}

.music-btn:hover {
    transform: scale(1.1);
}

.music-btn.playing {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2px;
}

.music-btn.playing .bar1,
.music-btn.playing .bar2,
.music-btn.playing .bar3 {
    width: 3px;
    height: 15px;
    background: white;
    animation: musicBars 1.5s ease infinite;
}

.music-btn.playing .bar1 { animation-delay: 0s; }
.music-btn.playing .bar2 { animation-delay: 0.2s; }
.music-btn.playing .bar3 { animation-delay: 0.4s; }

@keyframes musicBars {
    0% { height: 5px; }
    50% { height: 15px; }
    100% { height: 5px; }
}

/* 音量条样式 */
.music-btn .bar1,
.music-btn .bar2,
.music-btn .bar3 {
    display: inline-block;
    width: 3px;
    height: 15px;
    background-color: var(--mint);
    margin: 0 2px;
    border-radius: 3px;
    animation: soundBars 1.2s ease-in-out infinite;
}

.music-btn .bar1 {
    animation-delay: 0s;
}

.music-btn .bar2 {
    animation-delay: 0.4s;
    height: 20px;
}

.music-btn .bar3 {
    animation-delay: 0.8s;
}

@keyframes soundBars {
    0% {
        transform: scaleY(0.5);
    }
    50% {
        transform: scaleY(1);
    }
    100% {
        transform: scaleY(0.5);
    }
}

/* Hero Section */
.hero {
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--dark);
    overflow: hidden;
}

.text-overlay {
    position: relative;
    z-index: 3;
    width: 100%;
    max-width: 1440px;
    padding: 0 40px;
    text-align: center;
}

.big-text {
    font-size: 180px;
    font-weight: 900;
    line-height: 0.9;
    margin: 0;
    white-space: nowrap;
    text-transform: uppercase;
    letter-spacing: -5px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
}

.big-text span {
    display: inline-block;
    position: relative;
    animation: textCarousel 12s infinite;
}

@keyframes textCarousel {

    0%,
    16.66% {
        color: var(--yellow);
    }

    16.67%,
    33.33% {
        color: var(--mint);
    }

    33.34%,
    50% {
        color: var(--orange);
    }

    50.01%,
    66.66% {
        color: var(--blue);
    }

    66.67%,
    83.33% {
        color: var(--coral);
    }

    83.34%,
    100% {
        color: var(--yellow);
    }
}

.big-text .j {
    animation-delay: 0s;
}

.big-text .o {
    animation-delay: 2s;
}

.big-text .u {
    animation-delay: 4s;
}

.big-text .w {
    animation-delay: 6s;
}

.big-text .m {
    animation-delay: 8s;
}

.big-text .oy {
    animation-delay: 10s;
}

.subtitle {
    font-family: 'Dancing Script', cursive;
    color: var(--orange);
    font-size: 72px;
    position: absolute;
    right: 10%;
    bottom: -40px;
    transform: rotate(-5deg);
    white-space: nowrap;
    z-index: 4;
}

.hero-content {
    position: absolute;
    bottom: 80px;
    left: 0;
    width: 100%;
    text-align: center;
    z-index: 3;
    padding: 0 20px;
}

.hero-description {
    max-width: 800px;
    margin: 0 auto;
    font-size: 18px;
    line-height: 1.6;
    color: var(--white);
}

.bike-images {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
}

.bike-image {
    position: absolute;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 200px;
    height: 300px;
    transition: all 0.3s ease;
}

.bike-image.left-top {
    top: 10%;
    left: 5%;
    z-index: 1;
    height: 250px;
    width: 200px;
}

.bike-image.left-middle {
    top: 40%;
    left: 30%;
    z-index: 1;
}

.bike-image.left-bottom {
    top: 70%;
    left: 5%;
    z-index: 3;
    height: 400px;
    /* 增加高度 */
}

.bike-image.right-middle {
    top: 25%;
    right: 10%;
    z-index: 1;
    height: 350px;
}

.bike-image.right-bottom {
    top: 75%;
    right: 5%;
    z-index: 3;

}

/* 左侧图片浮动动画 */
@keyframes floatLeftTop {

    0%,
    100% {
        transform: translateY(0) translateX(0);
    }

    50% {
        transform: translateY(-15px) translateX(20px);
    }
}

@keyframes floatLeftMiddle {

    0%,
    100% {
        transform: translateY(0) translateX(0);
    }

    50% {
        transform: translateY(-25px) translateX(15px);
    }
}

@keyframes floatLeftBottom {

    0%,
    100% {
        transform: translateY(0) translateX(0);
    }

    50% {
        transform: translateY(-20px) translateX(25px);
    }
}

/* 右侧图片浮动动画 */
@keyframes floatRightTop {

    0%,
    100% {
        transform: translateY(0) translateX(0);
    }

    50% {
        transform: translateY(-20px) translateX(-15px);
    }
}

@keyframes floatRightMiddle {

    0%,
    100% {
        transform: translateY(0) translateX(0);
    }

    50% {
        transform: translateY(-15px) translateX(-25px);
    }
}

@keyframes floatRightBottom {

    0%,
    100% {
        transform: translateY(0) translateX(0);
    }

    50% {
        transform: translateY(-25px) translateX(-20px);
    }
}

.bike-image:hover {
    opacity: 1;
}

/* 移动端适配 */
@media (max-width: 768px) {
    .bike-image {
        width: 150px;
        /* 调整宽度 */
        height: 200px;
        /* 调整高度 */
        opacity: 0.8;
        /* 略微透明 */
        transition: all 0.3s ease;
    }

    /* 重新排列位置 */
    .bike-image.left-top {
        top: 15%;
        left: 5%;
    }

    .bike-image.left-middle {
        top: 35%;
        left: 15%;
    }

    .bike-image.left-bottom {
        height: 280px;
        /* 移动端稍微小一点 */
        top: 55%;
    }

    .bike-image.right-middle {
        top: 25%;
        right: 5%;
    }

    .bike-image.right-bottom {
        top: 45%;
        right: 5%;
    }

    /* 添加触摸反馈 */
    .bike-image:active {
        transform: scale(0.95);
        opacity: 1;
    }
}

/* 小屏幕进一步优化 */
@media (max-width: 480px) {
    .bike-image {
        width: 120px;
        /* 更小的宽度 */
        height: 160px;
        /* 更小的高度 */
    }

    /* 进一步调整位置，确保不重叠 */
    .bike-image.left-top {
        top: 13%;
        left: 5%;
    }

    .bike-image.left-middle {
        top: 45%;
        left: 10%;
        height: 150px;
    }

    .bike-image.left-bottom {
        height: 220px;
        /* 小屏幕再小一点 */
        top: 60%;
    }

    .bike-image.right-middle {
        top: 30%;
        right: 5%;
        height: 180px;
    }

    .bike-image.right-bottom {
        top: 65%;
        right: 5%;
        height: 150px;
    }
}

/* 添加微妙的渐变叠加 */
.hero::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(26, 26, 26, 0.3) 0%, rgba(26, 26, 26, 0.6) 100%);
    z-index: 1;
}

/* 添加背景装饰元素 */
.background-elements {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
}

.background-element {
    position: absolute;
    background-size: contain;
    background-repeat: no-repeat;
    opacity: 0.1;
}


@keyframes rotate {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}

@keyframes float {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-20px);
    }
}

/* 调整主要内容的z-index */
.main-content {
    position: relative;
    z-index: 2;
}

/* 介绍部分 */
.intro {
    padding: 100px 40px;
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
}

.intro h2 {
    font-size: 36px;
    margin-bottom: 30px;
}

.intro p {
    font-size: 18px;
    line-height: 1.6;
    opacity: 0.9;
}

/* Services Section */
.services {
    padding: 60px 40px;
    background: transparent;
}

.service-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    margin-bottom: 40px;
}

.service {
    position: relative;
    overflow: hidden;
    border-radius: 10px;
}

.service img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.service:hover img {
    transform: scale(1.05);
}

.service h3 {
    position: absolute;
    bottom: 30px;
    left: 30px;
    font-size: 24px;
    z-index: 2;
}

.service-description {
    max-width: 800px;
    margin: 0 auto 40px;
    text-align: center;
    font-size: 18px;
    line-height: 1.6;
}

.service-types {
    display: flex;
    justify-content: center;
    gap: 30px;
}

.service-type {
    color: var(--white);
    text-decoration: none;
    font-size: 18px;
    padding: 10px 30px;
    border: 2px solid var(--white);
    border-radius: 30px;
    transition: all 0.3s ease;
}

.service-type:hover {
    background: var(--white);
    color: var(--dark);
}

/* Menu Overlay */
.menu-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(26, 26, 26, 0.98);
    z-index: 999;
    display: none;
    align-items: center;
    justify-content: center;
}

.menu-overlay.active {
    display: flex;
}

.menu-nav ul {
    list-style: none;
    text-align: center;
}

.menu-nav li {
    margin: 30px 0;
}

.menu-nav a {
    color: var(--white);
    text-decoration: none;
    font-size: 24px;
    letter-spacing: 2px;
    transition: color 0.3s ease;
}

.menu-nav a:hover {
    color: var(--mint);
}

/* Cookie Consent */
.cookie-consent {
    display: none !important;
}

/* Responsive Design */
@media (max-width: 1200px) {
    .big-text {
        font-size: 140px;
    }
}

@media (max-width: 480px) {
    .big-text {
        font-size: 48px;
    }

    .subtitle {
        font-size: 36px;
    }

    .bike-image {
        width: 150px;
        height: 120px;
    }
}

/* Animations */
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes slideIn {
    from {
        transform: translateX(-100%);
    }

    to {
        transform: translateX(0);
    }
}

@keyframes scaleIn {
    from {
        transform: scale(0.9);
        opacity: 0;
    }

    to {
        transform: scale(1);
        opacity: 1;
    }
}

/* Loading Animation */
body:not(.loaded) {
    overflow: hidden;
}

body:not(.loaded) .hero {
    opacity: 0;
}

body.loaded .hero {
    opacity: 1;
    transition: opacity 1s ease;
}

/* Fade In Animation for Sections */
.fade-in {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease, transform 0.6s ease;
}

.fade-in.visible {
    opacity: 1;
    transform: translateY(0);
}

/* Menu Animation */
.menu-overlay {
    transition: opacity 0.3s ease;
    opacity: 0;
    pointer-events: none;
}

.menu-overlay.active {
    opacity: 1;
    pointer-events: auto;
}

.menu-overlay.active .menu-nav li {
    animation: slideIn 0.5s forwards;
    opacity: 0;
}

.menu-overlay.active .menu-nav li:nth-child(1) {
    animation-delay: 0.1s;
}

.menu-overlay.active .menu-nav li:nth-child(2) {
    animation-delay: 0.2s;
}

.menu-overlay.active .menu-nav li:nth-child(3) {
    animation-delay: 0.3s;
}

.menu-overlay.active .menu-nav li:nth-child(4) {
    animation-delay: 0.4s;
}

.menu-overlay.active .menu-nav li:nth-child(5) {
    animation-delay: 0.5s;
}

/* Service Hover Effects */
.service::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%);
    z-index: 1;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.service:hover::before {
    opacity: 1;
}

/* Hover Effects */
.email a:hover,
.language a:hover {
    color: var(--mint);
}

.service-type {
    position: relative;
    overflow: hidden;
}

.service-type::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.1);
    transition: left 0.3s ease;
}

.service-type:hover::before {
    left: 0;
}

/* Cookie Consent Animation */
.cookie-consent {
    animation: slideUp 0.5s ease forwards;
}

@keyframes slideUp {
    from {
        transform: translateY(100%);
    }

    to {
        transform: translateY(0);
    }
}

/* Why Choose Section */
.why-choose {
    position: relative;
    min-height: 100vh;
    padding: 100px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
}

.section-content {
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 20px;
}

.why-choose .section-title {
    text-align: center;
    margin-bottom: 60px;
    color: #fff;
    font-size: 2.5rem;
    line-height: 1.2;
}

/* 卡片展示区域 */
.cards-deck {
    position: relative;
    width: 100%;
    height: 60vh;
    min-height: 500px;
    perspective: 2000px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.info-card {
    position: absolute;
    width: 280px;
    height: 380px;
    transform: translateY(100vh);
    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
    opacity: 0;
    cursor: pointer;
    border-radius: 20px;
    overflow: hidden;
    perspective: 1000px;
}

.info-card.animate {
    opacity: 1;
    transform: none;
}

.cards-deck .info-card.stacked-1 {
    transform: translateY(180px) scale(1) !important;
    z-index: 4;
}

.cards-deck .info-card.stacked-2 {
    transform: translateY(220px) scale(0.97) !important;
    z-index: 3;
}

.cards-deck .info-card.stacked-3 {
    transform: translateY(260px) scale(0.94) !important;
    z-index: 2;
}

.cards-deck .info-card.stacked-4 {
    transform: translateY(300px) scale(0.91) !important;
    z-index: 1;
}

.cards-deck .info-card:hover {
    transform: translateY(-20px) scale(1.05) !important;
    z-index: 10;
}

.card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
    z-index: inherit;
}

.info-card.active .card-inner,
.info-card:hover .card-inner {
    transform: rotateY(180deg);
}

.card-front,
.card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 20px;
    overflow: hidden;
}

.card-front {
    background-color: var(--dark);
    z-index: 2;
}

.card-back {
    transform: rotateY(180deg);
    background: rgba(26, 26, 26, 0.9);
    z-index: 1;
}

.card-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}

.card-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom,
            rgba(0, 0, 0, 0.2) 0%,
            rgba(0, 0, 0, 0.8) 100%);
}

.card-number {
    font-size: 48px;
    color: var(--mint);
    margin-bottom: 15px;
}

.info-card h3 {
    font-size: 24px;
    margin-bottom: 10px;
    color: #fff;
}

/* 卡片动画状态 */
.info-card.animate {
    opacity: 1;
    transform: translateY(0);
}

.info-card:nth-child(1).animate {
    transform: translateX(-450px) rotate(-15deg);
}

.info-card:nth-child(2).animate {
    transform: translateX(-150px) rotate(-5deg);
}

.info-card:nth-child(3).animate {
    transform: translateX(150px) rotate(5deg);
}

.info-card:nth-child(4).animate {
    transform: translateX(450px) rotate(15deg);
}

/* 选中状态的卡片样式 */
.info-card.selected {
    transform: translateX(0) rotate(0) !important;
    z-index: 100;
}

.info-card.selected~.info-card {
    transform: translateX(100%) !important;
}

.info-card.selected~.info-card .card-inner {
    transform: none !important;
}

/* 其他卡片在选中状态下的位置调整 */
.info-card.selected-mode:not(.selected) {
    opacity: 0.5;
    pointer-events: none;
}

/* 悬停效果 */
.info-card:hover {
    transform: translateY(-20px) scale(1.05) !important;
    z-index: 10;
}

/* 响应式调整 */
@media (max-width: 1400px) {
    .info-card:nth-child(1).animate {
        transform: translateX(-350px) rotate(-15deg);
    }

    .info-card:nth-child(2).animate {
        transform: translateX(-120px) rotate(-5deg);
    }

    .info-card:nth-child(3).animate {
        transform: translateX(120px) rotate(5deg);
    }

    .info-card:nth-child(4).animate {
        transform: translateX(350px) rotate(15deg);
    }
}

/* 移动端样式 */
@media (max-width: 768px) {
    .section-title {
        font-size: 36px;
        margin-bottom: 50px;
        text-align: center;
        line-height: 1.3;
    }

    .cards-deck {
        padding: 20px;
        height: 500px;
        position: relative;
        perspective: 1500px;
        margin-top: 30px;
    }

    .info-card {
        width: 100%;
        height: 300px;
        position: relative;
        transform: none !important;
        margin-bottom: 20px;
        perspective: 1500px;
    }

    .info-card .card-inner {
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: transform 0.8s;
        transform-style: preserve-3d;
    }

    .info-card.flipped .card-inner {
        transform: rotateY(180deg);
    }

    .info-card .card-front,
    .info-card .card-back {
        position: absolute;
        width: 50%;
        height: 100%;
        backface-visibility: hidden;
        border-radius: 15px;
        overflow: hidden;
    }

    .info-card .card-front {
        transform: rotateY(0deg);
    }

    .info-card .card-back {
        transform: rotateY(180deg);
    }

    .info-card .card-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .info-card .card-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to bottom,
                rgba(0, 0, 0, 0.3) 0%,
                rgba(0, 0, 0, 0.8) 100%);
    }

    .info-card .card-content {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        padding: 25px;
        z-index: 2;
    }

    .info-card .card-number {
        font-size: 42px;
        color: var(--mint);
        margin-bottom: 10px;
    }

    .info-card h3 {
        font-size: 22px;
        margin-bottom: 10px;
        color: var(--white);
    }

    .info-card .mobile-description {
        font-size: 14px;
        line-height: 1.5;
        color: var(--white);
        opacity: 0.9;
    }

    /* 移动端特殊处理 */
    .pc-only {
        display: block !important;
    }

    .card-back .card-content {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        background: rgba(0, 0, 0, 0.7);
        padding: 30px;
    }

    .card-back .card-content p {
        font-size: 16px;
        line-height: 1.6;
        color: var(--white);
        margin: 0;
    }

    /* 移动端动画状态 */
    .info-card.animate {
        opacity: 1;
    }

    /* 移动端触摸反馈 */
    .info-card:active {
        transform: scale(0.98) !important;
        transition: transform 0.2s;
    }
}

/* Art on Wheels Section */
.art-on-wheels {
    padding: 100px 40px;
    background-color: transparent;
    text-align: center;
}

.section-description {
    max-width: 800px;
    margin: 0 auto 40px;
    font-size: 18px;
    line-height: 1.6;
    opacity: 0.9;
}

/* FAQ Section */
.faq {
    padding: 100px 40px;
    background-color: var(--dark);
}

.faq-grid {
    max-width: 1000px;
    margin: 0 auto 60px;
}

.faq-item {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding: 30px 0;
}

.faq-header {
    display: flex;
    align-items: center;
    gap: 20px;
    cursor: pointer;
}

.faq-number {
    font-size: 24px;
    color: var(--mint);
    font-weight: bold;
}

.faq-header h3 {
    font-size: 20px;
    margin: 0;
}

.faq-content {
    padding: 20px 0 0 44px;
    font-size: 16px;
    line-height: 1.6;
    opacity: 0.8;
}

/* Contact Section */
.contact {
    position: relative;
    width: 100%;
    min-height: 200vh;
    overflow: hidden;
    background: #000;
}

.video-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
}

.video-background video {
    height: 150%;
    width: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    object-position: center top;
}

.video-background::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
}

.contact-content {
    position: relative;
    z-index: 2;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 120px 20px;
    text-align: center;
    color: var(--white);
}

.contact .section-title {
    font-size: 48px;
    margin-bottom: 30px;
    color: var(--white);
}

.contact .section-description {
    font-size: 18px;
    line-height: 1.6;
    margin-bottom: 50px;
    color: var(--white);
    max-width: 800px;
    margin: 0 auto 50px;
}

.contact-buttons {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
}

.contact-button {
    display: inline-block;
    padding: 15px 40px;
    background: var(--white);
    color: var(--dark);
    text-decoration: none;
    border-radius: 30px;
    font-weight: 600;
    transition: all 0.3s ease;
    min-width: 250px;
}

.contact-button:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

/* 移动端适配 */
@media (max-width: 768px) {
    .contact {
        min-height: 100vh;
    }

    .contact-content {
        padding: 80px 20px;
    }

    .contact .section-title {
        font-size: 36px;
        margin-bottom: 20px;
    }

    .contact .section-description {
        font-size: 16px;
        padding: 0 20px;
    }

    .contact-button {
        width: 90%;
        max-width: 300px;
        padding: 12px 30px;
    }

    .video-background video {
        height: 130%;
        width: 100%;
        object-fit: cover;
        position: absolute;
        top: 0;
        left: 0;
        object-position: center top;

    }
}

/* 确保在较大屏幕上视频也能完整显示 */
@media (min-width: 1920px) {
    .contact {
        min-height: 800px;
    }

    .contact-content {
        padding: 150px 20px;
    }
}

/* Footer */
footer {
    padding: 100px 40px 40px;
    background-color: var(--dark);
}

.footer-content {
    max-width: 1200px;
    margin: 0 auto;
}

.footer-text {
    font-size: 24px;
    line-height: 1.4;
    margin-bottom: 60px;
    max-width: 800px;
}

.footer-logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin-bottom: 60px;
}

.footer-logo img {
    height: 60px;
}

.footer-logo span {
    font-family: 'Dancing Script', cursive;
    font-size: 24px;
    color: var(--orange);
}

.footer-nav {
    display: flex;
    justify-content: center;
    gap: 40px;
    margin-bottom: 60px;
}

.footer-nav a {
    color: var(--white);
    text-decoration: none;
    font-size: 16px;
    transition: color 0.3s ease;
}

.footer-nav a:hover {
    color: var(--mint);
}

.footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 40px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-links {
    display: flex;
    align-items: center;
    gap: 10px;
}

.footer-links a {
    color: var(--white);
    text-decoration: none;
    font-size: 14px;
    opacity: 0.7;
    transition: opacity 0.3s ease;
}

.footer-links a:hover {
    opacity: 1;
}

.credits {
    font-size: 14px;
    opacity: 0.7;
}

.credit-link {
    color: var(--white);
    text-decoration: none;
    margin-left: 5px;
}

.credit-link:hover {
    color: var(--mint);
}

/* CTA Buttons */
.cta-buttons {
    display: flex;
    justify-content: center;
    margin-top: 160px;
}

.cta-button {
    color: var(--white);
    text-decoration: none;
    font-size: 18px;
    padding: 15px 40px;
    border: 2px solid var(--white);
    border-radius: 30px;
    transition: all 0.3s ease;
}

.cta-button:hover {
    background: var(--white);
    color: var(--dark);
}

/* Carousel Styles */
.carousel {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background-color: var(--dark);
    display: flex;
    align-items: center;
    justify-content: center;
}

.carousel-container {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.carousel-track {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.carousel-slide {
    position: absolute;
    width: 33.33%;
    height: 85vh;
    opacity: 0.5;
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    transform: scale(0.85);
    filter: blur(4px);
}

.carousel-slide.prev {
    transform: translateX(-90%) scale(0.85);
    z-index: 1;
}

.carousel-slide.active {
    transform: translateX(0) scale(1);
    opacity: 1;
    filter: blur(0);
    z-index: 2;
}

.carousel-slide.next {
    transform: translateX(90%) scale(0.85);
    z-index: 1;
}

.carousel-content {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    padding-bottom: 60px;
}

.slide-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.slide-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.slide-text {
    position: relative;
    z-index: 2;
    text-align: center;
    color: var(--white);
    padding: 0 20px;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.5s ease-out 0.2s;
}

.carousel-slide.active .slide-text {
    opacity: 1;
    transform: translateY(0);
}

.slide-text h2 {
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 10px;
    text-transform: uppercase;
    letter-spacing: 2px;
}

.slide-text h1 {
    font-size: 64px;
    font-weight: 900;
    margin-bottom: 20px;
    font-family: 'Times New Roman', serif;
    letter-spacing: 1px;
}

.slide-text p {
    font-size: 16px;
    line-height: 1.6;
    margin-bottom: 30px;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
}

.explore-btn {
    background: none;
    border: 2px solid var(--white);
    color: var(--white);
    padding: 12px 30px;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 500;
}

.explore-btn:hover {
    background: var(--white);
    color: var(--dark);
}

.carousel-navigation {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 30px;
    z-index: 10;
}

.carousel-prev,
.carousel-next {
    background: none;
    border: none;
    color: var(--white);
    font-size: 24px;
    cursor: pointer;
    padding: 8px;
    opacity: 0.7;
    transition: all 0.3s ease;
}

.carousel-prev:hover,
.carousel-next:hover {
    opacity: 1;
}

/* Dark overlay for inactive slides */
.carousel-slide::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    z-index: 1;
    transition: opacity 0.5s ease-out;
}

.carousel-slide.active::before {
    opacity: 0;
}

/* 确保所有section都是半透明的 */
section {
    background-color: rgba(26, 26, 26, 0.7);
    position: relative;
    z-index: 1;
}

/* 特别是why-choose部分 */
.why-choose {
    background-color: rgba(26, 26, 26, 0.5);
}

/* 移除任何可能盖背景的样式 */
.hero,
.services,
.art-on-wheels,
.contact,
.faq {
    background: transparent;
}

@media (max-width: 480px) {
    .section-title {
        font-size: 28px;
    }

    .big-text {
        font-size: 36px;
    }

    .subtitle {
        font-size: 24px;
    }

    .slide-text h1 {
        font-size: 28px;
    }

    .explore-btn {
        padding: 10px 20px;
        font-size: 12px;
    }
}

@media (max-width: 768px) {
    .carousel {
        height: 100vh;
        padding: 60px 0;
        overflow: hidden;
    }

    .carousel-container {
        width: 100%;
        height: auto;
        position: relative;
    }

    .carousel-track {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .carousel-slide {
        position: absolute;
        width: 70%;
        height: auto;
        aspect-ratio: 1/1;
        opacity: 0.5;
        transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        transform: scale(0.85);
        filter: blur(2px);
    }

    .carousel-slide.prev {
        transform: translateX(-85%) scale(0.75);
        opacity: 0.3;
        z-index: 1;
    }

    .carousel-slide.active {
        transform: translateX(0) scale(1);
        opacity: 1;
        filter: blur(0);
        z-index: 2;
    }

    .carousel-slide.next {
        transform: translateX(85%) scale(0.75);
        opacity: 0.3;
        z-index: 1;
    }

    .carousel-content {
        width: 100%;
        height: 100%;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }

    .slide-image {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .slide-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .slide-text {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        padding: 20px 15px;
        background: linear-gradient(to top,
                rgba(0, 0, 0, 0.95) 0%,
                rgba(0, 0, 0, 0.7) 60%,
                rgba(0, 0, 0, 0) 100%);
        text-align: center;
        transform: translateY(0);
        opacity: 1;
    }

    .slide-text h2 {
        font-size: 12px;
        margin-bottom: 6px;
        text-transform: uppercase;
        letter-spacing: 1px;
    }

    .slide-text h1 {
        font-size: 20px;
        margin-bottom: 8px;
        font-weight: 700;
    }

    .slide-text p {
        font-size: 12px;
        line-height: 1.4;
        margin-bottom: 12px;
        padding: 0 10px;
    }

    .explore-btn {
        display: inline-block;
        padding: 8px 20px;
        font-size: 11px;
        background: transparent;
        border: 1px solid var(--white);
        color: var(--white);
        border-radius: 25px;
        text-transform: uppercase;
        letter-spacing: 1px;
    }

    .carousel-navigation {
        position: absolute;
        bottom: -40px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 10;
        display: flex;
        gap: 12px;
    }

    .carousel-prev,
    .carousel-next {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background: rgba(0, 0, 0, 0.5);
        border: 1px solid rgba(255, 255, 255, 0.3);
        color: var(--white);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        cursor: pointer;
    }
}

@media (max-width: 480px) {
    .carousel-container {
        width: 85%;
    }

    .slide-text {
        padding: 20px 15px;
    }

    .slide-text h2 {
        font-size: 12px;
        margin-bottom: 6px;
    }

    .slide-text h1 {
        font-size: 20px;
        margin-bottom: 10px;
    }

    .slide-text p {
        font-size: 12px;
        margin-bottom: 12px;
        padding: 0 10px;
    }

    .explore-btn {
        padding: 6px 16px;
        font-size: 10px;
    }

    .carousel-navigation {
        bottom: -50px;
    }

    .carousel-prev,
    .carousel-next {
        width: 32px;
        height: 32px;
        font-size: 16px;
    }
}

@media (max-width: 768px) {
    .service-grid {
        grid-template-columns: 1fr;
        gap: 20px;
        padding: 20px;
    }

    .service {
        height: 300px;
        border-radius: 15px;
        overflow: hidden;
        position: relative;
    }

    .service img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        transition: transform 0.3s ease;
    }

    .service:hover img {
        transform: scale(1.05);
    }

    .service::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.8) 100%);
        z-index: 1;
        opacity: 1;
    }

    .service h3 {
        position: absolute;
        bottom: 30px;
        left: 30px;
        font-size: 24px;
        color: var(--white);
        z-index: 2;
    }

    .service-description {
        padding: 0 20px;
        font-size: 16px;
        line-height: 1.6;
        margin: 30px auto;
        max-width: 600px;
    }

    .service-types {
        display: flex;
        flex-direction: column;
        gap: 15px;
        padding: 0 20px;
    }

    .service-type {
        width: 100%;
        text-align: center;
        padding: 15px 30px;
        font-size: 16px;
        border-radius: 30px;
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(5px);
    }

    .cards-deck {
        padding: 20px;
        height: auto;
    }

    .info-card {
        width: 100%;
        height: auto;
        min-height: 300px;
        position: relative;
        opacity: 1;
        transform: none !important;
        margin: 0;
        border-radius: 15px;
        overflow: hidden;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    }

    .card-front {
        position: relative;
        border-radius: 15px;
    }

    .card-bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center;
    }

    .card-number {
        font-size: 48px;
        color: var(--mint);
        margin-bottom: 15px;
        font-weight: 700;
    }

    .info-card h3 {
        font-size: 24px;
        margin-bottom: 15px;
        color: var(--white);
    }

    .info-card p {
        font-size: 16px;
        line-height: 1.6;
        color: rgba(255, 255, 255, 0.9);
        margin: 0;
    }

    .info-card.animate {
        opacity: 1;
        transform: none !important;
    }

    .info-card:hover {
        transform: translateY(-10px) !important;
    }
}

/* 移动端样式统一 */
@media (max-width: 768px) {

    /* 基础样式 */
    .section-title {
        font-size: 36px;
        margin-bottom: 50px;
        text-align: center;
        line-height: 1.3;
    }

    /* Why Choose Us 部分 */
    .why-choose {
        padding: 0;
        position: relative;
        overflow: visible;
        margin-bottom: 60px;
        background: none;
        min-height: auto;
    }

    .why-choose .section-content {
        padding: 0;
        min-height: 900px;
        position: relative;
        background: none;
    }

    .why-choose .section-title {
        text-align: center;
        padding: 40px 20px;
        margin: 0 0 20px 0;
        background-color: var(--dark);
        position: relative;
        z-index: 10;
    }

    /* 卡片容器 */
    .info-cards {
        position: relative;
        height: 700px;
        margin: 0 auto;
        padding: 20px;
        max-width: 340px;
        background: none;
    }

    /* 卡片基础样式 */
    .info-card {
        position: absolute;
        width: 85%;
        height: 350px;
        border-radius: 20px;
        overflow: hidden;
        transition: all 0.8s ease;
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
        transform-origin: top center;
        background: none;
    }

    /* 卡片堆叠位置 */
    .info-card.stacked-1 {
        transform: translateY(80px) scale(1);
        z-index: 4;
    }

    .info-card.stacked-2 {
        transform: translateY(220px) scale(0.97);
        z-index: 3;
    }

    .info-card.stacked-3 {
        transform: translateY(260px) scale(0.94);
        z-index: 2;
    }

    .info-card.stacked-4 {
        transform: translateY(300px) scale(0.91);
        z-index: 1;
    }

    /* 卡片内容样式 */
    .card-front {
        position: relative;
        width: 100%;
        height: 100%;
        overflow: hidden;
        background: none;
        border-radius: 15px;
    }

    .card-image {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        filter: none !important;
        -webkit-filter: none !important;
        transform: none !important;
        image-rendering: -webkit-optimize-contrast;
        image-rendering: crisp-edges;
        -ms-interpolation-mode: nearest-neighbor;
        z-index: 1;
    }

    .card-overlay {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0%;
        height: 100%;
        background: linear-gradient(to bottom,
                rgba(0, 0, 0, 0) 0%,
                rgba(0, 0, 0, 0.4) 50%,
                rgba(0, 0, 0, 0.8) 100%);
        z-index: 2;
        pointer-events: none;
    }

    .card-content {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        padding: 30px;
        z-index: 3;
        background: none;
    }

    .card-number {
        color: var(--mint);
        font-size: 3.5rem;
        font-weight: 700;
        line-height: 1;
        margin-bottom: 15px;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    }

    .info-card h3 {
        color: var(--white);
        font-size: 1.5rem;
        margin-bottom: 12px;
        text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
    }

    .mobile-description {
        color: var(--white);
        font-size: 1rem;
        line-height: 1.5;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
        opacity: 1;
    }

    /* 卡片动画 */
    .info-card.moving-down {
        animation: moveToBottom 0.5s ease forwards;
    }

    @keyframes moveToBottom {
        0% {
            transform: translateY(180px) scale(1);
            z-index: 4;
        }

        100% {
            transform: translateY(340px) scale(0.91);
            z-index: 1;
        }
    }

    /* 页面其他部分响应式调整 */
    .reasons-grid {
        grid-template-columns: 1fr;
    }

    .footer-bottom {
        flex-direction: column;
        gap: 20px;
        text-align: center;
    }

    .footer-nav {
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }

    .footer-text {
        font-size: 20px;
        text-align: center;
    }

    .art-on-wheels {
        margin-top: 100px;
        position: relative;
        z-index: 1;
        background: none;
    }

    .pc-only {
        display: block !important;
    }

    /* 卡片悬停效果 */
    .info-card.animate {
        opacity: 1;
        transform: none !important;
    }

    .info-card:hover {
        transform: translateY(-10px) !important;
    }
}

@media (max-width: 768px) {
    .cards-deck {
        padding: 20px;
        height: auto;
        display: flex;
        flex-direction: column;
        gap: 25px;
    }

    .info-card {
        position: relative;
        width: 100%;
        height: 300px;
        margin: 0;
        perspective: 1500px;
        cursor: pointer;
    }

    .card-inner {
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: transform 0.8s;
        transform-style: preserve-3d;
    }

    .info-card.flipped .card-inner {
        transform: rotateY(180deg);
    }

    .card-front,
    .card-back {
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
        border-radius: 15px;
        overflow: hidden;
    }

    .card-front {
        background: var(--dark);
        transform: rotateY(0deg);
    }

    .card-back {
        background: var(--dark);
        transform: rotateY(180deg);
        display: flex !important;
        /* 覆盖PC端的隐藏样式 */
    }

    .card-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .card-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to bottom,
                rgba(0, 0, 0, 0.3) 0%,
                rgba(0, 0, 0, 0.8) 100%);
    }

    .card-content {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        padding: 25px;
        color: var(--white);
        text-align: left;
    }

    .card-number {
        font-size: 42px;
        color: var(--mint);
        margin-bottom: 10px;
        font-weight: 700;
    }

    .info-card h3 {
        font-size: 22px;
        margin-bottom: 10px;
        color: var(--white);
    }

    .mobile-description {
        font-size: 14px;
        line-height: 1.5;
        color: var(--white);
        opacity: 0.9;
    }

    /* 移动端特有的翻转动画 */
    .info-card.animate {
        opacity: 1;
        transform: none !important;
    }

    /* 移动端点击态样式 */
    .info-card:active {
        transform: scale(0.98) !important;
        transition: transform 0.2s;
    }

    /* 确保PC only的内容在移动端显示 */
    .pc-only {
        display: block !important;
    }

    /* 背面内容样式 */
    .card-back .card-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
        background: rgba(0, 0, 0, 0.7);
        padding: 30px;
        text-align: center;
    }

    .card-back .card-content p {
        font-size: 16px;
        line-height: 1.6;
        color: var(--white);
    }
}

/* 音乐提示遮罩 */
.music-prompt {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    cursor: pointer;
    opacity: 1;
    transition: opacity 0.3s ease, visibility 0.3s ease;
}

.music-prompt.hidden {
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
}

.prompt-content {
    text-align: center;
    color: var(--white);
    padding: 40px;
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    animation: pulse 2s infinite;
}

.prompt-icon {
    font-size: 48px;
    color: var(--mint);
    margin-bottom: 20px;
    animation: float 2s ease-in-out infinite;
}

.prompt-content p {
    font-size: 18px;
    margin: 0;
    letter-spacing: 1px;
}

@keyframes pulse {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.05);
    }
    100% {
        transform: scale(1);
    }
}

@keyframes float {
    0% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-10px);
    }
    100% {
        transform: translateY(0);
    }
}
