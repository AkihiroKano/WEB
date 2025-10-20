class MobileMenu {
    constructor() {
        this.burger = document.querySelector('.burger');
        this.nav = document.querySelector('.nav');
        this.body = document.body;
        this.isOpen = false;

        this.init();
    }

    init() {
        this.burger.addEventListener('click', () => this.toggleMenu());

        // Закрытие меню при клике на ссылку
        const navLinks = this.nav.querySelectorAll('.nav__link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => this.closeMenu());
        });

        // Закрытие меню при ресайзе окна (на больших экранах)
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 768 && this.isOpen) {
                this.closeMenu();
            }
        });
    }

    toggleMenu() {
        if (this.isOpen) {
            this.closeMenu();
        } else {
            this.openMenu();
        }
    }

    openMenu() {
        this.nav.classList.add('nav--active');
        this.burger.classList.add('burger--active');
        this.body.classList.add('menu-open');
        this.isOpen = true;
    }

    closeMenu() {
        this.nav.classList.remove('nav--active');
        this.burger.classList.remove('burger--active');
        this.body.classList.remove('menu-open');
        this.isOpen = false;
    }
}

// Инициализация при загрузке DOM
document.addEventListener('DOMContentLoaded', () => {
    new MobileMenu();
});