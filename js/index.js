$(document).ready(function() {
	document.getElementById("copy-button").addEventListener("click", function() {
    copyToClipboardMsg(document.getElementById("copy-email"), "copy-msg");
});

	function copyToClipboardMsg(elem, msgElem) {
	  var succeed = copyToClipboard(elem);
    var msg;
    if (!succeed) {
        msg = "Copy not supported or blocked.  Press Ctrl+c to copy."
    } else {
        msg = "Text copied to the clipboard."
    }
    if (typeof msgElem === "string") {
        msgElem = document.getElementById(msgElem);
    }
    msgElem.innerHTML = msg;
    setTimeout(function() {
        msgElem.innerHTML = "";
    }, 2000);
}

function copyToClipboard(elem) {
	  // create hidden text element, if it doesn't already exist
    var targetId = "_hiddenCopyText_";
    var isInput = elem.tagName === "INPUT" || elem.tagName === "TEXTAREA";
    var origSelectionStart, origSelectionEnd;
    if (isInput) {
        // can just use the original source element for the selection and copy
        target = elem;
        origSelectionStart = elem.selectionStart;
        origSelectionEnd = elem.selectionEnd;
    } else {
        // must use a temporary form element for the selection and copy
        target = document.getElementById(targetId);
        if (!target) {
            var target = document.createElement("textarea");
            target.style.position = "absolute";
            target.style.left = "-9999px";
            target.style.top = "0";
            target.id = targetId;
            document.body.appendChild(target);
        }
        target.textContent = elem.textContent;
    }
    // select the content
    var currentFocus = document.activeElement;
    target.focus();
    target.setSelectionRange(0, target.value.length);
    
    // copy the selection
    var succeed;
    try {
    	  succeed = document.execCommand("copy");
    } catch(e) {
        succeed = false;
    }
    // restore original focus
    if (currentFocus && typeof currentFocus.focus === "function") {
        currentFocus.focus();
    }
    
    if (isInput) {
        // restore prior selection
        elem.setSelectionRange(origSelectionStart, origSelectionEnd);
    } else {
        // clear temporary content
        target.textContent = "";
    }
    return succeed;
}
var layout   = document.getElementById('layout'),
        menu     = document.getElementById('menu'),
        menuLink = document.getElementById('menuLink');

    function toggleClass(element, className) {
        var classes = element.className.split(/\s+/),
            length = classes.length,
            i = 0;

        for(; i < length; i++) {
          if (classes[i] === className) {
            classes.splice(i, 1);
            break;
          }
        }
        // The className is not found
        if (length === classes.length) {
            classes.push(className);
        }

        element.className = classes.join(' ');
    }

    menuLink.onclick = function (e) {
        var active = 'active';

        e.preventDefault();
        toggleClass(layout, active);
        toggleClass(menu, active);
        toggleClass(menuLink, active);
    };


	// var $activePage = $('#welcome-page')
	// var $layout = $('#layout');
	// var $pages = $('.page');
	// var $menu = $('#menu');
	// var $welcomeLink = $('#welcome-link');
	// var $skillLink = $('#skill-link');
	// var $experienceLink = $('#experience-link');
	// var $projectLink = $('#project-link');
	// var $resumeLink = $('#resume-link');
	// var $contactLink = $('#contact-link');
	// var $main = $('#main');
	// var $welcomePage = $('#welcome-page');
	// var $skillPage = $('#skill-page');
	// var $experiencePage = $('#experience-page');
	// var $projectPage = $('#project-page');
	// var $resumePage = $('#resume-page');
	// var $contactPage = $('#contact-page');
	// var $footer = $('#footer');
	// $pages.each(function() {$(this).hide(); });
	// $welcomePage.show();
	// $welcomeLink.click(function(){
	// 	$activePage.hide();
	// 	$welcomePage.show();
	// 	$activePage = $welcomePage;
	// });
	// $skillLink.click(function(){
	// 	$activePage.hide();
	// 	$skillPage.show();
	// 	$activePage = $skillPage;
	// });
	// $experienceLink.click(function(){
	// 	$activePage.hide();
	// 	$experiencePage.show();
	// 	$activePage = $experiencePage;
	// });
	// $projectLink.click(function(){
	// 	$activePage.hide();
	// 	$projectPage.show();
	// 	$activePage = $projectPage;
	// });
	// $resumeLink.click(function(){
	// 	$activePage.hide();
	// 	$resumePage.show();
	// 	$activePage = $resumePage;
	// });
	// $contactLink.click(function(){
	// 	$activePage.hide();
	// 	$contactPage.show();
	// 	$activePage = $contactPage;
	// });
});

