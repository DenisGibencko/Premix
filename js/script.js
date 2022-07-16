"use strict"

let isMobile = {
   Android: function () { return navigator.userAgent.match(/Android/i); },
   BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); },
   iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
   Opera: function () { return navigator.userAgent.match(/Opera Mini/i); },
   Windows: function () { return navigator.userAgent.match(/IEMobile/i); },
   any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); }
};

let body = document.querySelector('body');
let menuIcon = document.querySelector('.menu__burger');
let menuBody = document.querySelector('.menu__body');
let logoELem = document.querySelector('.header__logo');

let menuLinks = document.querySelectorAll('.menu__link');

for (let i = 0; i < menuLinks.length; i++) {
   menuLinks[i].addEventListener("click", function () {
      menuBody.classList.remove('active');
      body.classList.remove('lock');
      menuIcon.classList.remove('active');
   })
}

menuIcon.addEventListener("click", function (e) {
   menuBody.classList.toggle("active");
   body.classList.toggle("lock");
   menuIcon.classList.toggle("active");
   logoELem.classList.toggle("visible")
})

document.addEventListener('click', function (event) {
   if (!event.target.closest('.menu__body') && !event.target.closest('.menu__burger')) {
      menuBody.classList.remove('active');
      body.classList.remove('lock');
      menuIcon.classList.remove('active');
   }

})




if (isMobile.any()) {
   body.classList.add('touch')
   let arrow = document.querySelectorAll('.arrow')
   for (let i = 0; i < arrow.length; i++) {
      let thisLink = arrow[i].previousElementSibling
      let subMenu = arrow[i].nextElementSibling;
      let thisArrow = arrow[i];

      thisLink.classList.add('parent');
      arrow[i].addEventListener("click", function (e) {
         subMenu.classList.toggle('open');
         thisArrow.classList.toggle('active');
      });
   }
} else {
   body.classList.add('mouse')
}


function ibg() {

   let ibg = document.querySelectorAll(".ibg");
   for (var i = 0; i < ibg.length; i++) {
      if (ibg[i].querySelector('img')) {
         ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
      }
   }
}

ibg();


$(document).ready(function () {
   $('.main-screen__slider').slick({
      arrows: false,
      adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed: 3000,
   });

   $('.team__slider').slick({
      arrows: true,
      adaptiveHeight: true,
      dots: true,
   });

   $(".menu__body a").mPageScroll2id({
      offset: 80,
   });
   $(".item-products p a").mPageScroll2id({
      offset: 80,
   });



});



$(document).ready(function () {
   $('.item-products__label').click(function (event) {
      if ($('.products').hasClass('one')) {
         $('.item-products__label').not($(this)).removeClass('active');
         $('.item-products__text').not($(this).next()).slideUp(300);
      }
      $(this).toggleClass("active").next().slideToggle(300);

      $('.item-products a').on('click', function () {
         $('.item-products__label').not($(this)).removeClass('active');
         $('.item-products__text').not($(this).next()).slideUp(300);
      })
   });

   function DeleteGoogleIframe() {
      // Проверяем есть ли на странице фрейм гугла.
      // Если у вас на сайте есть другие фреймы, данную запись придется менять.
      if ($("iframe").length) {
         // Ожидаем пока фрейм прогрузится
         $("iframe").load(function () {
            // Прячем панель гугла через 250мс (таймаут был подобран экспериментально)
            // Без использования таймаута убрать панель мне не удалось.
            setTimeout(function () {
               // прячем панель
               $("iframe").hide();
            }, 250);
         });
      }
   }
   $('.menu__flag a').on('change', DeleteGoogleIframe);
});



