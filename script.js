
  $('.menu-toggle').click(function(){
     $(".nav").toggleClass("mobile-nav");
     $(this).toggleClass("is-active");
     
  }); 
  $(document).click(function(e) {
   if (!$(e.target).closest('.menu-toggle, .nav').length) {
       $('.nav').removeClass('mobile-nav');
       $('.menu-toggle').removeClass('is-active');
   }
});
  
const icon = document.querySelector(".icon");
const search = document.querySelector(".search");
const clearBtn = document.querySelector(".clear");

icon.onclick = function () {
	search.classList.toggle("active");
};

clearBtn.onclick = function () {
   document.getElementById('mysearch').value = '';
   search.classList.remove("active"); // Close the search bar when the close button is clicked
};

// Close the search bar if the click is outside of it
document.addEventListener('click', function(event) {
   if (!search.contains(event.target) && !icon.contains(event.target) && !clearBtn.contains(event.target)) {
       search.classList.remove("active");
   }
});


$('.main-link').click(function (e) {
    if ($(window).width() < 768) { // Check if screen size is smaller (mobile view)
        e.preventDefault(); // Prevent default navigation
        var $dropdownMenu = $(this).next('.dropdown-menu');
        var $toggleIcon = $(this).next().find('.toggle-icon'); // Find the associated toggle icon

        // Toggle dropdown visibility
        if ($dropdownMenu.hasClass('show')) {
            $dropdownMenu.removeClass('show');
            $toggleIcon.removeClass('fa-minus').addClass('fa-plus'); // Reset icon to plus
        } else {
            $('.dropdown-menu').removeClass('show'); // Hide other dropdowns
            $('.toggle-icon').removeClass('fa-minus').addClass('fa-plus'); // Reset icons to plus

            $dropdownMenu.addClass('show');
            $toggleIcon.removeClass('fa-plus').addClass('fa-minus'); // Change icon to minus
        }
    }
});





// Hide dropdowns if clicked outside
$(document).click(function(e) {
   if (!$(e.target).closest('.nav-item').length) {
       $('.dropdown-menu').removeClass('show');
       $('.toggle-icon').removeClass('fa-minus').addClass('fa-plus');
   }
});
$(document).click(function(e) {
   if (!$(e.target).closest('.mobile-nav, .menu-toggle').length) {
       $(".mobile-nav").removeClass("is-active");
   }
});


//target numbers animate

document.addEventListener('DOMContentLoaded', function () {
   // Function to start the animation
   function startCounter() {
       $('.count').each(function () {
           var $this = $(this);
           var target = $this.data('target');

           $({ count: 0 }).animate({ count: target }, {
               duration: 4000,
               easing: 'swing',
               step: function (now) {
                   $this.text(Math.ceil(now));
               }
           });
       });
   }

   // Create an intersection observer to check when the target-numbers section is in view
   const observer = new IntersectionObserver(entries => {
       entries.forEach(entry => {
           if (entry.isIntersecting) {
               startCounter(); // Start counter animation when in view
               observer.unobserve(entry.target); // Stop observing once animation starts
           }
       });
   }, { threshold: 0.5 }); // Adjust threshold to the desired amount of visibility

   // Observe all elements with the class target-numbers
   const targetSections = document.querySelectorAll('.target-numbers');
   targetSections.forEach(section => {
       observer.observe(section);
   });
});




