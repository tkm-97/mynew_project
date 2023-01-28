let items = document.querySelectorAll(".carousel .carousel-item");

items.forEach((el) => {
  const minPerSlide = 4;
  let next = el.nextElementSibling;
  for (var i = 1; i < minPerSlide; i++) {
    if (!next) {
      // wrap carousel by using first child
      next = items[0];
    }
    let cloneChild = next.cloneNode(true);
    el.appendChild(cloneChild.children[0]);
    next = next.nextElementSibling;
  }
});

var swiper = new Swiper(".swiper-container.swiper-testimonial", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next-test",
    prevEl: ".swiper-button-prev-test"
  }
});

var delay = 5000; //in milleseconds

jQuery(document).ready(function ($) {
  setTimeout(function () {
    showNewsletterPopup();
  }, delay);

  $(".popup-close").click(function () {
    $(".newsletter-overlay").hide();

    //when closed create a cookie to prevent popup to show again on refresh
    setCookie("newsletter-popup", "popped", 30);
  });
});

function showNewsletterPopup() {
  if (getCookie("newsletter-popup") == "") {
    $(".newsletter-overlay").show();
    setCookie("newsletter-popup", "popped", 30);
  } else {
    console.log("Newsletter popup blocked.");
  }
}

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + "; " + expires + "; path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = jQuery.trim(ca[i]);
    if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
  }
  return "";
}

window.onscroll = () => {
  toggleTopButton();
};
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function toggleTopButton() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("back-to-up").classList.remove("d-none");
  } else {
    document.getElementById("back-to-up").classList.add("d-none");
  }
}

ScrollReveal().reveal(".headline");

// Initialize Marqueefy
const marqueefyList = Array.prototype.slice.call(
  document.querySelectorAll(".marqueefy:not(#marqueefy-with-image)")
);
const marqueefyInstances = marqueefyList.map((m) => {
  return new marqueefy.Marqueefy(m);
});

// Initiallize Marqueefy on "Window: load event"
window.addEventListener("load", () => {
  const marqueefyWithImagesInstance = new marqueefy.Marqueefy(
    marqueefyWithImages
  );
});

var scroll_offset = 120;
$(window).scroll(function () {
  var $this = $(window);
  if ($(".sticky-btn").length) {
    if ($this.scrollTop() > scroll_offset) {
      $(".sticky-btn").addClass("revealed");
    } else {
      $(".sticky-btn").removeClass("revealed");
    }
  }
});
