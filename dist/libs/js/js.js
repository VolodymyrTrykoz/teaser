var menu = document.querySelector('.menu');
var navigation = document.querySelector('.header__nav');
var mobileBox = document.querySelector('.mobile-menu');
var mobileMenuItems = document.querySelectorAll('.nav__mobile a')
var logoMenu = document.querySelector('.header__logo--menu');
var businessSection = document.querySelector('.business');
var bottomToggle = document.querySelector('.toggle-sm');

menu.addEventListener('click', menuOpen);




bottomToggle.addEventListener('click', function(){
	businessSection.classList.remove('business-lg');
	this.classList.add('toggle-sm--hidden');
});


function menuOpen(){
	mobileBox.classList.toggle('mobile-menu-fix');
	mobileBox.classList.add('slideInLeft');
	menu.classList.toggle('menu-js-toggle');
	logoMenu.classList.add('slideInLeft');
	
	if(this.classList.contains('menu-js-toggle')){
		console.log('works');
		for(var i = 0; i < mobileMenuItems.length; i++){
			
		 	mobileMenuItems[i].classList.add('fadeInLeft');
		 	mobileMenuItems[i].addEventListener('click', function(){
		 		// mobileBox.classList.add('fadeOut');
		 		businessSection.classList.remove('business-lg');
				mobileBox.classList.remove('mobile-menu-fix');
				menu.classList.remove('menu-js-toggle');
				bottomToggle.classList.add('toggle-sm--hidden');
				
		 	})
		}
		menuClose();
		          /////
		          	function menuClose(callback){
	
						function callback(){
							setTimeout(function(){
							mobileBox.classList.remove('slideInLeft');
							}, 1000)
						}
						
						
						callback();
					}

		          /////
	
	}

	
}



//color changing function
var links = document.querySelectorAll('.nav__mobile a');

  for (var i = 0; i < links.length; i++) {
   	links[i].addEventListener('mouseover', function() {
    
    for (var j = 0; j < links.length; j++) {
     	links[j].style.color = '#7ab9ff';
    }

    this.style.color = 'inherit';

   });
  }

for (var i = 0; i < links.length; i++) {
   	links[i].addEventListener('mouseout', function(e) {
    
	    for (var j = 0; j < links.length; j++) {
	       links[j].style.color = 'inherit';
	    }
   	});
}


window.onload = function () {

	var parallaxBox = document.getElementById ( 'box' );
	var c1left = document.getElementById ( 'l1' ).offsetLeft,
	c1top = document.getElementById ( 'l1' ).offsetTop,
	c2left = document.getElementById ( 'l2' ).offsetLeft,
	c2top = document.getElementById ( 'l2' ).offsetTop,
	c3left = document.getElementById ( 'l3' ).offsetLeft,
	c3top = document.getElementById ( 'l3' ).offsetTop;

	
	parallaxBox.onmousemove = function ( event ) {
		event = event || window.event;
		var x = event.clientX - parallaxBox.offsetLeft,
		y = event.clientY - parallaxBox.offsetTop;
		
		mouseParallax ( 'l1', c1left, c1top, x, y, 5 );
		mouseParallax ( 'l2', c2left, c2top, x, y, 15 );
		mouseParallax ( 'l3', c3left, c3top, x, y, 30 );

	}
	
}

function mouseParallax ( id, left, top, mouseX, mouseY, speed ) {
	var obj = document.getElementById ( id );
	var parentObj = obj.parentNode,
	containerWidth = parseInt( parentObj.offsetWidth ),
	containerHeight = parseInt( parentObj.offsetHeight );
	obj.style.left = left - ( ( ( mouseX - ( parseInt( obj.offsetWidth ) / 2 + left ) ) / containerWidth ) * speed ) + 'px';
	obj.style.top = top - ( ( ( mouseY - ( parseInt( obj.offsetHeight ) / 2 + top ) ) / containerHeight ) * speed ) + 'px';
}


var header = document.querySelector('.header');
var busLink = document.querySelectorAll('.business a');
var advertBlock = document.querySelector('.advertisement__descr');
var advertLaptop = document.querySelector('.advertisement__laptop');
var laptopCont = document.querySelector('.advertisement .container');
var parLay2 = document.querySelector('.parallax2');	
var parLay3 = document.querySelector('.parallax3');	
var parLay4 = document.querySelector('.parallax4');


for(var i = 0; i < busLink.length; i++){
	busLink[i].addEventListener('click', busLinkAnimation);
}




function busLinkAnimation(centering){
	var logoMain = document.querySelector('.header__logo');
	function centering(){
		setTimeout(function(){
		
		laptopCont.classList.add('container--center');
		advertLaptop.classList.add('zoomIn');
		parLay2.classList.add('zoomIn');
		parLay3.classList.add('zoomIn');
		parLay4.classList.add('zoomIn');
		advertLaptop.classList.add('fadeIn');
		logoMain.classList.add('header--abs');
		logoMain.classList.add('zoomInDown');
		advertBlock.classList.add('displayNone'); }, 1000)
	}
	advertLaptop.classList.remove('zoomIn');
	parLay2.classList.remove('zoomIn');
	parLay3.classList.remove('zoomIn');
	parLay4.classList.remove('zoomIn');
	header.classList.remove('slideInDown');
	advertBlock.classList.add('zoomOutLeft');
	navigation.classList.add('zoomOutLeft');
	centering();
}



