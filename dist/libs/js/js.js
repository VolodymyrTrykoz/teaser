window.addEventListener('load', animationGeneralRun);

function animationGeneralRun(){

	var menu = document.querySelector('.menu');
	var navigation = document.querySelector('.header__nav');
	var mobileBox = document.querySelector('.mobile-menu');
	var mobileMenuItems = document.querySelectorAll('.nav__mobile a')
	var logoMenu = document.querySelector('.header__logo--menu');
	var businessSection = document.querySelector('.business');
	var bottomToggle = document.querySelector('.toggle-sm');

	menu.addEventListener('click', menuOpen);

	bottomToggle.addEventListener('drag', function(){
		businessSection.classList.remove('business-lg');
		this.classList.add('toggle-sm--hidden');
	});

	parallaxRun();
	runBusinessAnimation();

	function menuClose() { // remove class after animation
		mobileBox.classList.remove('mobile-menu-fix');
	}  
	
	function menuOpen(){
		var self = this; // for context in setTimeOut
		
		if(this.classList.contains('menu-js-toggle')){ // if Menu Opened
			menu.classList.remove('menu-js-toggle');
			
			mobileBox.classList.remove('slideInLeft');					
			mobileBox.classList.add('fadeOut');					
			setTimeout(menuClose.bind(self), 1000); // remove classes after 1 sec (animation)

		} else { // if Menu Closed
			mobileBox.classList.toggle('mobile-menu-fix');
			mobileBox.classList.add('slideInLeft');
			menu.classList.toggle('menu-js-toggle');
		}
	}
	
	function addMenuAmination() { 
		logoMenu.classList.add('slideInLeft');
		for (var i = 0; i < mobileMenuItems.length; i++) {
			mobileMenuItems[i].classList.add('slideInLeft');
		};
	};

	addMenuAmination(); // add all necessary lib's classes for animation ONCE (not on each click!)



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


		function parallaxRun() {

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

			function mouseParallax ( id, left, top, mouseX, mouseY, speed ) {
				var obj = document.getElementById ( id );
				var parentObj = obj.parentNode,
				containerWidth = parseInt( parentObj.offsetWidth ),
				containerHeight = parseInt( parentObj.offsetHeight );
				obj.style.left = left - ( ( ( mouseX - ( parseInt( obj.offsetWidth ) / 2 + left ) ) / containerWidth ) * speed ) + 'px';
				obj.style.top = top - ( ( ( mouseY - ( parseInt( obj.offsetHeight ) / 2 + top ) ) / containerHeight ) * speed ) + 'px';
			}
			
		}




		function runBusinessAnimation(){
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
		}
}



