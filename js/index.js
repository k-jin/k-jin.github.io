$(document).ready(function() {
	var $activePage = $('#welcome-page')
	var $layout = $('#layout');
	var $pages = $('.page');
	var $menu = $('#menu');
	var $welcomeLink = $('#welcome-link');
	var $skillLink = $('#skill-link');
	var $experienceLink = $('#experience-link');
	var $projectLink = $('#project-link');
	var $resumeLink = $('#resume-link');
	var $contactLink = $('#contact-link');
	var $main = $('#main');
	var $welcomePage = $('#welcome-page');
	var $skillPage = $('#skill-page');
	var $experiencePage = $('#experience-page');
	var $projectPage = $('#project-page');
	var $resumePage = $('#resume-page');
	var $contactPage = $('#contact-page');
	var $footer = $('#footer');
	$pages.each(function() {$(this).hide(); });
	$welcomePage.show();
	$welcomeLink.click(function(){
		$activePage.hide();
		$welcomePage.show();
		$activePage = $welcomePage;
	});
	$skillLink.click(function(){
		$activePage.hide();
		$skillPage.show();
		$activePage = $skillPage;
	});
	$experienceLink.click(function(){
		$activePage.hide();
		$experiencePage.show();
		$activePage = $experiencePage;
	});
	$projectLink.click(function(){
		$activePage.hide();
		$projectPage.show();
		$activePage = $projectPage;
	});
	$resumeLink.click(function(){
		$activePage.hide();
		$resumePage.show();
		$activePage = $resumePage;
	});
	$contactLink.click(function(){
		$activePage.hide();
		$contactPage.show();
		$activePage = $contactPage;
	});
});

