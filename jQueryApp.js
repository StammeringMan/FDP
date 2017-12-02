$(document).ready(function(){

	var myToken = "EAACEdEose0cBAM5fObOUu0cEAkude3EYMLg1RbEWXmGaPE6V6SZBquZAvfb2cPQuAG2U5J5VPXX14LuLJZBFamYPwN6zlNd5qRcV0jIEuMvrNaNsXyZAEKMZAeSfRKZCU4XEiKk8OnfoR40uqgMkeI4cT0M8g6BTT5J6e1mGRVyayuR21wVHEpcZAVZC4ZBHRLtKpAFxP3ipyOQZDZD";
	$(".loader").hide();

	function myInfo(){
		$.ajax("https://graph.facebook.com/me?fields=email, name,birthday&access_token="+myToken,{
			success: function(response){
				console.log(response);
				console.log(typeof(response));
				$("#name").text(response.name);
				$("#email").text(response.email);
				$("#bday").text(response.birthday);
				
			},
			error: function(request, errorType, errorMessage){
				console.log(request);
				console.log(errorType);
				alert(errorMessage);
			},
			timeout:2000,
			beforeSend: function(){
				$(".loader").show();
			},
			complete: function(){
				$(".loader").hide();
			}
		});
	}	
	$("#click").on('click', myInfo);

	$(".loader1").hide();
	function myFeeds(){
		$.ajax("https://graph.facebook.com/me?fields=feed&access_token="+myToken,{
			success: function(response){
				console.log(response);
				console.log(typeof(response));
				$("#post").text(response.feed.data[0].story);
				$("#post2").text(response.feed.data[1].story);
				$("#post3").text(response.feed.data[2].story);
				$("#post4").text(response.feed.data[3].story);
				$("#post5").text(response.feed.data[4].story);
			},
			error: function(request, errorType, errorMessage){
				console.log(request);
				console.log(errorType);
				alert(errorMessage);
			},
			timeout: 2000,
			beforeSend: function () {
				$(".loader1").show();
			},
			complete: function(){
				$(".loader1").hide();
			}
		});
	}

	$("#feeds").on('click', myFeeds);
});	

