
jQuery(document).ready(function() {	
	
    /*
        Background slideshow
    */
	// $('.banner-area').backstretch([
	//                      "images/backgrounds/1.jpg"
	//                    , "images/backgrounds/2.jpg"
	//                    , "images/backgrounds/3.jpg"
	//                   ], {duration: 3000, fade: 750});
	

	$("#typed").typed({
		// strings: ["Typed.js is a <strong>jQuery</strong> plugin.", "It <em>types</em> out sentences.", "And then deletes them.", "Try it out!"],
		stringsElement: $('#typed-strings'),
		typeSpeed: 50,
		backDelay: 1000,
		loop: true,
		contentType: 'html', // or text
		// defaults to false for infinite loop
		loopCount: false,
		callback: function(){ foo(); },
		resetCallback: function() { newTyped(); }
	});

	$(".reset").click(function(){
		$("#typed").typed('reset');
	});
 
 
    function newTyped(){ /* A new typed object */ }

    function foo(){  }


	$( "#randomForm" ).submit(function( e ) {
		// let str = JSON.stringify( $( "#randomForm" ).serializeArray() );
		// alert(str);
		$.ajax({
			method: "POST",
			url: "/",
			data: $( "#randomForm" ).serializeArray()
		})
		.done(function( msg ) {
			$('#countdown').empty();
			//alert( msg.length );
			for(var i = 0 ; i < msg.length ; i++){
				$('#countdown').append('<div class="item"><p>'+msg[i]+'</p></div>');
			}

		});
		return false;
	});
	
});
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-105987965-1', 'auto');
ga('send', 'pageview');
