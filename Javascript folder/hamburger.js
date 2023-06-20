let hamburger = document.querySelector('.hamburger');
let navLinks = document.querySelectorAll('.nav-link');

hamburger.onclick = () => {
  hamburger.classList.toggle('active');
  navLinks.forEach(navLink => navLink.classList.toggle('active'));
};


/* JavaScript/jQuery */
// $(document).ready(function() {
//     $('.hamburger').click(function() {
//       $('.navbar').toggleClass('show');
//     });
//   });