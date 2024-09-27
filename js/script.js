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

    // ローディング画面をフェードアウトさせて非表示にする
    loadingScreen.style.transition = "opacity 0.5s ease";
    loadingScreen.style.opacity = 0;

    // フェードアウト完了後に完全に非表示にする
    setTimeout(function() {
        loadingScreen.style.display = "none";
    }, 1000); // 1000ミリ秒後に非表示
});



// ナビゲーションを押した際にスムーズにスクロールする動作
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // デフォルトのリンク動作を無効化
            const targetId = this.getAttribute('href').substring(1); // クリックしたリンクのhrefからターゲットIDを取得
            const targetSection = document.getElementById(targetId); // ターゲットIDに対応するセクションを取得

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50, // セクションの上部位置までスクロール
                    behavior: 'smooth' // スムーズスクロール
                });
            }
        });
    });
});



// ナビゲーション画面を表示（表示中はスクロールを禁止）
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navigationMenu = document.getElementById('navigation-menu');
    const body = document.body;

    navToggle.addEventListener('click', function() {
        navigationMenu.classList.toggle('active');

        // ナビゲーションが表示されている場合にスクロールを無効化
        if (navigationMenu.classList.contains('active')) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = 'auto';
        }
    });

    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: 'smooth'
                });
            }

            navigationMenu.classList.remove('active');
            body.style.overflow = 'auto'; // スクロールを元に戻す
        });
    });
});
