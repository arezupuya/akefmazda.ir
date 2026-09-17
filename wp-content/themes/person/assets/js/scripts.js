jQuery(document).ready(function() {
/**
 *--------------------------------------------------------------------------
 * responsive menu
 *--------------------------------------------------------------------------
 */
	jQuery('.panel_responsive_menu li.menu-item-has-children').append('<span class="toggle_menu"><i class="fa fa-angle-down" aria-hidden="true"></i></span>');
	jQuery('.panel_responsive_menu li.menu-item-has-children span.toggle_menu').click(function(){
		jQuery(this).parent().find('ul:first').slideToggle(500);
	});
	jQuery('.wam-menu-trigger , .menu_icon').click(function(){
		jQuery('.panel_responsive_menu').fadeToggle(500);
		jQuery('.background_panel_menu').fadeToggle(500);
	});
	jQuery('.background_panel_menu').click(function(){
		jQuery('.panel_responsive_menu').fadeToggle(500);
		jQuery('.background_panel_menu').fadeToggle(500);
	});
/**
 *--------------------------------------------------------------------------
 * go to top
 *--------------------------------------------------------------------------
 */
    jQuery('.go_to_top').click(function(){
        jQuery("html, body").animate({ scrollTop: 0 }, 1000);
    });
/**
 *--------------------------------------------------------------------------
 * index main slider
 *--------------------------------------------------------------------------
 */
    jQuery('.block_gallery').fadeIn(200);
    jQuery('.gallery').pignoseGallery({
        thumbnails: '.gallery-thumbnails'
    });

/**
 *--------------------------------------------------------------------------
 * web application menu search trigger
 *--------------------------------------------------------------------------
 */
    jQuery(".wam-search-trigger").click(function () {
        jQuery('.wam-icons').fadeOut(200);
        jQuery('.wam-search-wrapper').fadeIn(200);
        jQuery('.wam-search-wrapper').css('display','flex');
        jQuery('.wam-search-wrapper').css('flex-flow','column');
    });
    jQuery(".wam-search-back").click(function () {
        jQuery('.wam-search-wrapper').css('flex-flow','nowrap');
        jQuery('.wam-search-wrapper').css('display','flex');
        jQuery('.wam-search-wrapper').fadeOut(200);
        jQuery('.wam-icons').fadeIn(200);
    });



/**
 *--------------------------------------------------------------------------
 * dokan strings translations
 *--------------------------------------------------------------------------
 */
    var dokan_share_btn = ' به اشتراک گذاری <i class="fa fa-external-link"></i>';
    //var dokan_share_content = jQuery('body.dokan-store .dokan-share-wrap');
    //var dokan_share_content = dokan_share_content.text().replace('share','به اشتراک گذاری');
    jQuery('body.dokan-store button.dokan-share-btn').html(dokan_share_btn);

    
/**
 *--------------------------------------------------------------------------
 * quantity buttons
 *--------------------------------------------------------------------------
 */
    var quantity = jQuery('.woocommerce div.product form.cart div.quantity');
    var quantity_plus_wrapper = "<div class='quantity_btn quantity_plus'>+</div>";
    var quantity_minus_wrapper = "<div class='quantity_btn quantity_minus'>-</div>";
    var quantity_field = jQuery('input.qty');

    quantity.prepend(quantity_plus_wrapper);
    quantity.append(quantity_minus_wrapper);
    

    jQuery(document).on('click','.quantity_plus', function(){
        var tmp_val = parseInt(quantity_field.val());
        tmp_val = tmp_val + 1;
        quantity_field.attr('value',tmp_val);
    });

    jQuery(document).on('click','.quantity_minus', function(){
        var tmp_val = parseInt(quantity_field.val());
        if(tmp_val > 1) {
            tmp_val = tmp_val - 1;
            quantity_field.attr('value',tmp_val);
        }
    });
    
}); // end document.ready();

/**
 *--------------------------------------------------------------------------
 * ajax search   - global
 *--------------------------------------------------------------------------
 */
    function ajax_search(){
        var length_text = jQuery('#txt_search').val().length;
        if ( length_text >= 3 ) {
            jQuery('.main_result_ajax_search').html('');
            jQuery('.preloader_search').show(0);
            jQuery.ajax({
                type: "POST",
                url: ajax_url ,
                data:  {
                    action: 'ajax_search_onliner',
                    s: jQuery('#txt_search').val(),
                    cat: jQuery('.cat_in_search option:selected').val()
                },
                success: function(msg){
                    jQuery('.main_result_ajax_search').html(msg);
                    jQuery('.preloader_search').hide(0);
                }
            });
        }
    }
    jQuery('.close_box_search_ajax').live( 'click', function(){
        jQuery('.main_result_ajax_search').html('');
        jQuery('#txt_search').val('');
    });
/**
 *--------------------------------------------------------------------------
 * web app menu - side navigation
 *--------------------------------------------------------------------------
 */
    jQuery(document).ready(function($) {
        
        $(".wam-account-trigger").click(function() {
           $(".wam-sidenav").toggleClass('wam-sidenav--visible');
           $(".wam-dark-layer").addClass('wam-dark-layer--visible');
        });
        
        $(".wam-dark-layer--visible").click(function() {
           $(".wam-dark-layer").removeClass('wam-dark-layer--visible');
        });

        jQuery('.wam-dark-layer').click(function() {
            $(".wam-sidenav").toggleClass('wam-sidenav--visible');
            $(".wam-dark-layer").removeClass('wam-dark-layer--visible');
        });

    });