document.write(
	'<script type="text/javascript" src="js/select2.min.js"></script>'
	);




jQuery(document).ready(function(){

    $('.week-selection').select2({
      minimumResultsForSearch: Infinity
    });

  jQuery('.hamburger-icon, .cross-icon').click(function () {
      jQuery('body').toggleClass('open-menu');
    }); 
})

