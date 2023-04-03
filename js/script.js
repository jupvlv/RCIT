document.addEventListener('DOMContentLoaded', function () {

  const swiper = new Swiper(".mySwiper", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button--next",
      prevEl: ".swiper-button--prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,  
    },
  });
    
  const swiper2 = new Swiper(".service-swiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: ".service-button--next",
      prevEl: ".service-button--prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    },
  });
    
  const swiper3 = new Swiper('#js-carousel', {  
    slidesPerView: "auto",
    spaceBetween: 20,
    speed: 3000,
    loop: true,
    allowTouchMove: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: false // или сделать так, чтобы восстанавливался autoplay после взаимодействия
    } 
  });





  const btnUp = {
    el: document.querySelector('.btn-up'),
    scrolling: false,
    show() {
      if (this.el.classList.contains('btn-up_hide') && !this.el.classList.contains('btn-up_hiding')) {
        this.el.classList.remove('btn-up_hide');
        this.el.classList.add('btn-up_hiding');
        window.setTimeout(() => {
          this.el.classList.remove('btn-up_hiding');
        }, 300);
      }
    },
    hide() {
      if (!this.el.classList.contains('btn-up_hide') && !this.el.classList.contains('btn-up_hiding')) {
        this.el.classList.add('btn-up_hiding');
        window.setTimeout(() => {
          this.el.classList.add('btn-up_hide');
          this.el.classList.remove('btn-up_hiding');
        }, 300);
      }
    },
    addEventListener() {
      // при прокрутке окна (window)
      window.addEventListener('scroll', () => {
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        if (this.scrolling && scrollY > 0) {
          return;
        }
        this.scrolling = false;
        // если пользователь прокрутил страницу более чем на 200px
        if (scrollY > 400) {
          // сделаем кнопку .btn-up видимой
          this.show();
        } else {
          // иначе скроем кнопку .btn-up
          this.hide();
        }
      });
      // при нажатии на кнопку .btn-up
      document.querySelector('.btn-up').onclick = () => {
        this.scrolling = true;
        this.hide();
        // переместиться в верхнюю часть страницы
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }
    }
  }
  
  btnUp.addEventListener();

});