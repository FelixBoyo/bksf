
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


$('.toggle-icon').click(function() {
   var $dropdownMenu = $(this).next('.dropdown-menu');
   
   // Toggle dropdown visibility
   if ($dropdownMenu.hasClass('show')) {
       $dropdownMenu.removeClass('show');
       $(this).removeClass('fa-minus').addClass('fa-plus');
   } else {
       $('.dropdown-menu').removeClass('show'); // Hide other dropdowns
       $('.toggle-icon').removeClass('fa-minus').addClass('fa-plus'); // Reset icons
       
       $dropdownMenu.addClass('show');
       $(this).removeClass('fa-plus').addClass('fa-minus');
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

