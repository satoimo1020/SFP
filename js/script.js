$(document).ready(function(){
    $('.bxslider').bxSlider({
        mode: 'horizontal',
        moveSlides: 1,
        slideMargin: 40,
        infiniteLoop: true,
        minSlides: 1,
        maxSlides: 1,
        speed: 800,
        auto: true
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.hidden');

    function checkVisibility() {
        const triggerBottom = window.innerHeight / 5 * 4;

        elements.forEach(element => {
            const box = element.getBoundingClientRect();
            if (box.top < triggerBottom && !element.classList.contains('visible')) {
                element.classList.add('visible');
                element.classList.remove('hidden');
            }
        });
    }

    checkVisibility();
    window.addEventListener('scroll', checkVisibility);
});



document.addEventListener('scroll', function() {
    const scrollY = window.scrollY;

    // 各図形が異なる速度でスクロールするようにする
    document.querySelector('.shape1').style.transform = `translateY(${scrollY * -0.5}px)`;
    document.querySelector('.shape2').style.transform = `translateY(${scrollY * -0.3}px)`;
    document.querySelector('.shape3').style.transform = `translateY(${scrollY * -0.7}px)`;
});



window.addEventListener("load", function() {
    const loadingScreen = document.getElementById("loading");

    // フォントの読み込みを待つ
    const fontPromises = [
        document.fonts.load("1em 'Sawarabi Gothic'"),
        document.fonts.load("1em 'Noto Sans JP'")
    ];

    Promise.all(fontPromises).then(() => {
        // ローディング画面をフェードアウトさせて非表示にする
        loadingScreen.style.transition = "opacity 0.5s ease";
        loadingScreen.style.opacity = 0;

        // フェードアウト完了後に完全に非表示にする
        setTimeout(function() {
            loadingScreen.style.display = "none";
        }, 1000); // 1000ミリ秒後に非表示
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');
    const navToggle = document.getElementById('nav-toggle');
    const navigationMenu = document.getElementById('navigation-menu');
    const body = document.body;

    // ナビゲーションのトグル
    navToggle.addEventListener('click', function() {
        navigationMenu.classList.toggle('active');

        // ナビゲーションが表示されている場合にスクロールを無効化
        if (navigationMenu.classList.contains('active')) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = 'auto';
        }
    });

    // ナビゲーション外をクリックした際の処理
    document.addEventListener('click', function(event) {
        if (navigationMenu.classList.contains('active') && 
            !navigationMenu.contains(event.target) && 
            event.target !== navToggle) {
            
            navigationMenu.classList.remove('active');
            body.style.overflow = 'auto'; // スクロールを元に戻す
        }
    });
});
