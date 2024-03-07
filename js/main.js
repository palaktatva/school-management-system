document.write(
	'<script type="text/javascript" src="js/select2.min.js"></script>'
	);




jQuery(document).ready(function(){

    jQuery('.week-selection').select2({
      minimumResultsForSearch: Infinity,  
      
    });
    jQuery('.roles').select2({
      minimumResultsForSearch: Infinity,  
      placeholder: "Select a roles"
    })
    jQuery('.status').select2({
      minimumResultsForSearch: Infinity,  
      placeholder: "Select a status"
    })

  jQuery('.hamburger-icon, .cross-icon').click(function () {
      jQuery('body, html').toggleClass('open-menu');
    }); 

    jQuery('.modal-btn').click(function () {
      jQuery("body,html").addClass('modal-open');
      var _this = jQuery(this).attr('data-link');

      var _currentModal = jQuery(".custom-modal[data-target='" + _this + "']");
      _currentModal.addClass("visible");

      setTimeout(function () {
          _currentModal.addClass("fadein");
      }, 125);
  });
  jQuery('.custom-modal,.modal-close').click(function () {
      jQuery("body,html").removeClass('modal-open');
      var _this = jQuery(this)
      jQuery(this).closest(".custom-modal").removeClass("fadein");
      setTimeout(function () {
          _this.closest(".custom-modal").removeClass("visible");
      }, 125);

  });
  jQuery(".custom-modal .modal-inner-content").click(function(e){
      e.stopPropagation();
  })

  jQuery(".custom-tab-wrapper .tab-heading-block ul li a").click(function (e) {
    e.preventDefault();
    var _link = jQuery(this).attr('data-link');
    jQuery(this).closest('li').addClass('active');
    jQuery(this).closest('li').siblings().removeClass('active');
    jQuery(this).closest('.custom-tab-wrapper').find('.tab-inner-content[data-tab="'+_link+'"]').addClass('active');
    jQuery(this).closest('.custom-tab-wrapper').find('.tab-inner-content[data-tab="'+_link+'"]').siblings().removeClass('active');
  });

  })
    