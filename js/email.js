$(document).ready(function() {
	$('#send-btn').click(function () {
		if ($('#sender-msg').val() == '' || $('#sender-email').val() == '' ||
			$('#sender-email').val().indexOf('@') == -1) 
		{
			msg = "Please enter a valid email and message";
         	$('#send-result').html(msg);
          	$('#send-result').removeClass('good');
          	setTimeout(function() {
		        $('#send-result').html('');
		    }, 10000);
		} else {
			var data = {
				name : $('#sender-name').val(),
				email : $('#sender-email').val(),
				subject : $('#sender-subject').val(),
				msg : $('#sender-msg').val()
			};
			$.ajax({
	            type: "POST",
	            url: "../mail.php",
	            data: data,
	            success: function(){
	            	var msg="Your email was successfully sent, Kevin will get back to you ASAP";
	            	$('#send-result').html(msg);
	            	$('#send-result').addClass('good');
	            	setTimeout(function() {
		        		$('#send-result').html('');
				    }, 10000);
	            },
	            error: function(xhr){
	            	var msg="Something went wrong! Kevin's on it";
	            	$('#send-result').html(msg);
	            	$('#send-result').removeClass('good');
					setTimeout(function() {
		        		$('#send-result').html('');
		    		}, 10000);
	            }
	        });
		}
	});


});
