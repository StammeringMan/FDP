$(document).ready(function(){

	var myToken = "EAACEdEose0cBAMNlP2TqSZAp7GDjeXaJ5FEKQlEMAf2zxV8irKaLi1hk6rLvEVdylZCrZCSbWrFyqwelZAx3Niw1eUXS4zIZAoIeNXkebc8aXrh8zBA6LnuCBXYr1dWXYJjjI8pFb3krgRp2hcoBCPcUsArPDECSvmNYZCuUxNP3BM4SwbsAY6nTxNgZBLfdV0ZD";

	function myInfo(){
		$.ajax("https://graph.facebook.com/me?fields=email, name,birthday&access_token="+myToken,{
			success: function(response){
				console.log(response);
				console.log(typeof(response));
				$("#name").text(response.name);
				$("#email").text(response.email);
				$("#bday").text(response.birthday);
				
			}
		});
	}	
	$("#click").on('click', myInfo);

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
			}
		});
	}
	$("#feeds").on('click', myFeeds);
});	

