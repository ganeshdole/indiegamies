window.onscroll = function() {
    stickyNavbar();
};

var navbar = document.querySelector('nav');
var sticky = navbar.offsetTop;

function stickyNavbar() {
    if (window.scrollY >= sticky) {
        navbar.classList.add('sticky');
     } else {
        navbar.classList.remove('sticky');
     }     
}

var dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(function(dropdown) {
    var trigger = dropdown.querySelector('h6');
    var content = dropdown.querySelector('.dropdown-content');

    trigger.addEventListener('mouseover', function() {
        content.style.display = 'block';
        dropdown.classList.add('show');
    });

    dropdown.addEventListener('mouseleave', function() {
        content.style.display = 'none';
        dropdown.classList.remove('show');
    });
});
