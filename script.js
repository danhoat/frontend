(function($){
	
	$( document ).ready(function() {
		
		$("#showLogin").click(function(){
			console.log('click');	
			$("#modalLogin").fadeIn(1000);
			$("body").toggleClass('modal-open')
		});
	});
	
})(jQuery)