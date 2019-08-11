function scrollToTop() {
  window.scrollTo(0,0);
}

function animateElements() {
  var services = document.getElementById('services');
  var elements = document.querySelectorAll('.card');
  var serviceTop = services.offsetTop;
  if(window.pageYOffset >= serviceTop - 150) {
    elements.forEach(function (item, index) {
      setTimeout(function () {
        if (!item.classList.contains('fadeInUp')) {
          item.classList.remove('md:hidden');
          item.classList.add('fadeInUp');            
        }
      }, index * 300)
    });
  }
}

window.onscroll = function() {
  if(window.innerWidth > 791) {
    animateElements();
  }
};
