

$(document).ready(function(){ 
  $(" .accordin-title.page-wrapper .side-navigation .logout-section a").click(function(){
    alert();
   $(this).closest(".nav-listing").find("li").toggleClass("active");
   $(this).closest(".nav-listing").siblings().find(".li").removeClass("active")
  });
});
