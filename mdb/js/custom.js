$(document).ready(function() {
	$("#portfolioDiv1").hide();
	$("#storiesDiv").hide();
	$("#wordsDiv").hide();
	$("#firstText").hide();
	$("#secondText").hide();
	setTimeout(function() {
		$("#firstText").slideDown("slow");
	}, 500);
	
	setTimeout(function() {
		$("#secondText").slideDown("slow");
	}, 1000);
	
	$("#creative_writer").click(function() {
		$("#homeDiv").slideUp();
		$("footer").slideUp();
		$("#aboutMeDiv1").addClass("d-none").slideUp();
		$("#portfolioDiv1").removeClass("d-none").slideDown();
	});
	
	$("#stories").click(function() {
		$("#wordsDiv").fadeOut();
		$("#storiesDiv").fadeIn();
	});
	
	$("#words").click(function() {
		$("#storiesDiv").fadeOut();
		$("#wordsDiv").fadeIn();
	});
	
	$("#aboutMe").click(function() {
		$("#homeDiv").slideUp();
		$("footer").slideUp();
		$("#portfolioDiv1").addClass("d-none").slideUp();
		$("#aboutMeDiv1").removeClass("d-none").slideDown();
	});
	
});