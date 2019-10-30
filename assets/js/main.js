$(function(){
	NProgress.start();
    NProgress.done();
    var width = 100,
	    perfData = window.performance.timing,
	    EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart),
	    time = parseInt((EstimatedTime/1000)%60)*100;

	var PercentageID = $("#percent_count"),
        start = 0,
        end = 100,
        durataion = time;

    animateValue(PercentageID, start, end, durataion);

	function animateValue(id, start, end, duration) {
		var range = end - start,
		    current = start,
		    increment = end > start ? 1 : -1,
		    stepTime = Math.abs(Math.floor(duration / range)),
		    obj = $(id);

		var timer = setInterval(function() {
		    current += increment;
		    $(obj).text(current + "%");
		    $('html').css({'overflow':'hidden'});
		    if (current == end) {
		        clearInterval(timer);
		        $('.loading-screen').fadeOut(500);
		        $('html').css({'overflow':'visible'});
		    }
		}, stepTime);
	}


})
$(document).ready(function(){

	var input_selector = 'input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], input[type=date], input[type=time], textarea';
    $(input_selector).each(function (element, index) {
      var $this = $(this);
      $this.blur(function(){
      	if($this.val() === ""){
      		 $this.siblings('label').removeClass('active');
      	}
      }).focus(function(){
      	$this.siblings('label').addClass('active');
      })
    });

    $(this).click(function(e){
    	if($('.sidebar.left').hasClass('active') || $('.sidebar.right').hasClass('active')){
			if($(e.target).closest('.modal-sidebar').length){
				$('.sidebar.right').removeClass('active')
				$('.sidebar.left').removeClass('active')
    			$('.modal-sidebar').removeClass('active')
			}
		}
		else{

		}
	})
    $('#btn_navbar').click(function(){
    	$('.sidebar.left').addClass('active');
    	$('.modal-sidebar').addClass('active')
    })
    $('#btn_settings').click(function(){
    	if($('.sidebar.right').hasClass('active')){
    		$('.sidebar.right').removeClass('active')
    		$('.modal-sidebar').removeClass('active')
    	}
    	else{
    		$('.sidebar.right').addClass('active')
    		$('.modal-sidebar').addClass('active')
    	}

    })

    $('#dark_theme_switch').change(function(){
		if($(this).is(':checked')){
			$('body').attr('class','theme-dark')
		}		
		else{
			$('body').attr('class','theme-light')
		}
	})
	$('.sidebar-theme-content > ul > li:not(.skins-color-label)').each(function(){
		$(this).click(function(){
			var color_theme = $(this).attr('data-color-theme'),
				object_color = '.sidebar-theme-content > ul > li[data-color-theme=' + color_theme + '] > .mark-checked > input[type=radio]';

				$(object_color).prop('checked', '1');
				$('main').attr('class', 'theme-' +$(object_color).val());
		})
	})




});
