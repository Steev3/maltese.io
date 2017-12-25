// JavaScript Document
//Animate Mobile Menu
$(document).ready(function() {
	$(".button-menu-open").click(function() {
		$(".link-mobile").css("height","100%");
		$(".link-mobile").css("overflow","auto");
		$("body").css("overflow","hidden");
		$(".button-menu-open").css("display","block");
		$(".button-menu-close").css("display","block");
		$(".obscurator").fadeToggle();
	});
});

$(document).ready(function() {
	$(".button-menu-close").click(function() {
		$(".link-mobile").css("height","0");
		$("body").css("overflow","auto");
		$(".button-menu-open").css("display","block");
		$(".button-menu-close").css("display","block");
		$(".obscurator").fadeToggle();
	});
});
//Animate Mobile Menu

//Animate Exclusive Menu
$(document).ready(function() {
	$("#li-servizi-open").click(function() {
		$(".servizi").css("height","auto");
		$("#li-servizi-open").css("display","none");
		$("#li-servizi-close").css("display","block");
	});
});

$(document).ready(function() {
	$("#li-servizi-close").click(function() {
		$(".servizi").css("height","0");
		$("#li-servizi-open").css("display","block");
		$("#li-servizi-close").css("display","none");
	});
});
//Animate Exclusive Menu

//Animate Mobile Menu Contacts
$(document).ready(function() {
	$(".button-contact-open").click(function() {
		$(".quick-contact-mobile").css("height","auto");
		$(".quick-contact-mobile").css("border-radius","0 0 4px 4px");
		$(".button-contact-open").css("display", "none");
		$(".button-contact-close").css("display", "block");
	});
});

$(document).ready(function() {
	$(".button-contact-close").click(function() {
		$(".quick-contact-mobile").css("height","50px");
		$(".quick-contact-mobile").css("border-radius","0");
		$(".button-contact-open").css("display", "block");
		$(".button-contact-close").css("display", "none");
	});
});
//Animate Mobile Menu Contacts

$(document).ready(function() {
	$(".obscurator").click(function() {
		$(".link-mobile").css("height","0");
		$(".obscurator").fadeOut();
	});
});

//Remove Mobile Elments by resizing screen
$(window).resize(function() {
  var window_width = $(window).width();
  if(window_width < 976) {
    $(".button-menu-open").css("display","block");
	$(".button-menu-close").css("display","none");
	$(".link-mobile").css("height","0");
	$(".quick-contact-mobile").css("height","50px");
	$(".button-contact-open").css("display","block");
	$(".button-contact-close").css("display","none");
	$(".obscurator").css("display","none");
	$("body").css("overflow","auto");
  } else {
  	$(".button-menu-open").css("display","none");
	$(".button-menu-close").css("display","none");
  }
});
//Remove Mobile Elments by resizing screen

//Close every menu open on "mobile menu" click
$(document).ready(function() {
	$(".link-mobile").click(function() {
		$(".link-mobile").css("height","0");
		$(".servizi").css("height","0");
		$(".quick-contact-mobile").css("height","50px");
		$(".quick-contact-mobile").css("border-radius","0");
		$(".button-contact-open").css("display", "block");
		$(".button-contact-close").css("display", "none");
		$(".obscurator").fadeOut();
	});
});
//Close every menu open on "mobile menu" click

