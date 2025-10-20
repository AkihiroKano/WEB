import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

// Инициализация слайдера после загрузки DOM
document.addEventListener('DOMContentLoaded', function () {
    const worksSlider = new Swiper('.works__slider', {
        // Подключаем модули
        modules: [Navigation, Pagination],

        // Основные настройки
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        centeredSlides: true,

        // Включение тач-свайпа на всех устройствах
        simulateTouch: true,
        touchRatio: 1,
        touchAngle: 45,
        grabCursor: true,

        // Пагинация
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        // Навигация
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // Адаптивность точно по требованиям
        breakpoints: {
            // Мобильные (0-767px) - 1 слайд, свайп
            320: {
                slidesPerView: 1,
                spaceBetween: 20,
                centeredSlides: true
            },
            // Планшет (768px-1199px) - 1 слайд, свайп
            768: {
                slidesPerView: 1,
                spaceBetween: 30,
                centeredSlides: true
            },
            // Десктоп (1200px-1919px) - 3 слайда, кнопки
            1200: {
                slidesPerView: 3,
                spaceBetween: 10,
                centeredSlides: false,
                simulateTouch: false // Отключаем свайп на десктопе
            },
            // Большие экраны (1920px+) - 3 слайда с большим расстоянием
            1920: {
                slidesPerView: 3,
                spaceBetween: 20, // Увеличенное расстояние
                centeredSlides: false,
                simulateTouch: false
            }
        },

        // Дополнительные настройки
        speed: 600,
        autoplay: {
            delay: 5000,
            disableOnInteraction: true,
        },
    });

    console.log('Works slider initialized with exact requirements');
});