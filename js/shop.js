$(document).ready(function() {
	
	$('.add-to-busket-block').hide();
	
	
	$('.add-to-busket-btn').on('click', function() {
		$('.add-to-busket-block').show();
		$('.count-input').val("0");
	});
	
	$('.btn-plus').on('click', function() {
	var a; 
	a= parseInt(($('.count-input').val()))+1;
		$('.count-input').val(a);
	});

	$('.btn-minus').on('click', function() {
	var a; 
	a= parseInt(($('.count-input').val()))-1;
	
		if(a>=0){
		$('.count-input').val(a);
		}
		else{
			a=0;
		}
	});
	
	$('.btn-close').on('click', function() {
	$('.add-to-busket-block').hide();
	});
	
	$('.close').on('click', function() {
	$('.add-to-busket-block').hide();
	});
	
	let cart = new Array();
	cart=[];
	
	$('.ok-1').on('click', function() {
		var a = $('.count-input').val();
		AddToCard(0, a);
	});
	$('.ok-2').on('click', function() {
		var a = $('.count-input').val();
		AddToCard(1, a);
	});
		$('.ok-3').on('click', function() {
		var a = $('.count-input').val();
		AddToCard(2, a);
	});
	$('.ok-4').on('click', function() {
		var a = $('.count-input').val();
		AddToCard(3, a);
	});
		$('.ok-5').on('click', function() {
		var a = $('.count-input').val();
		AddToCard(4, a);
	});
		$('.ok-6').on('click', function() {
		var a = $('.count-input').val();
		AddToCard(5, a);
	});
		$('.ok-7').on('click', function() {
		var a = $('.count-input').val();
		AddToCard(6, a);
	});
	$('.ok-8').on('click', function() {
		var a = $('.count-input').val();
		AddToCard(7, a);
	});
		$('.ok-9').on('click', function() {
		var a = $('.count-input').val();
		AddToCard(8, a);
	});
	$('.ok-10').on('click', function() {
		var a = $('.count-input').val();
		AddToCard(9, a);
	});
		$('.ok-11').on('click', function() {
		var a = $('.count-input').val();
		AddToCard(10, a);
	});
		$('.ok-12').on('click', function() {
		var a = $('.count-input').val();
		AddToCard(11, a);
	});
	
	function AddToCard(n, amount){
		if(amount>0) 
		{
			cart[n]=amount; 
		}
	}

	function addRow() {
		for(let i=0; i<cart.length; i++){
		
		if(cart[i]>0){
		/*	document.querySelector('.cart-body').insertAdjacentHTML(
			'afterbegin',
			`<div class="row">
			<input readonly class="product"></input>
			<input readonly class="amount"></input>
			</div>`      
			) */
	
			switch(i) {
				case 0:
					//var t = "Product1";
					document.querySelector('.cart-body').insertAdjacentHTML(
			'afterbegin',
			`<div class="row">
			<input readonly class="product0"></input>
			<input readonly class="amount0"></input>
			</div>`)
			$('.product0').val("Ratchet & Clank: Rift Apart");
			$('.amount0').val(cart[i]);
					break;

				case 1: 
					//var t = "Product2";
					document.querySelector('.cart-body').insertAdjacentHTML(
			'afterbegin',
			`<div class="row">
			<input readonly class="product1"></input>
			<input readonly class="amount1"></input>
			</div>`)
			$('.product1').val("Diablo IV");
			$('.amount1').val(cart[i]);
					break;
		
				case 2:
					//var t = "Product3";
					document.querySelector('.cart-body').insertAdjacentHTML(
			'afterbegin',
			`<div class="row">
			<input readonly class="product2"></input>
			<input readonly class="amount2"></input>
			</div>`)
			$('.product2').val("Darkest Dungeon");
			$('.amount2').val(cart[i]);
					break;
			
				case 3:
					//var t = "Product4";
					document.querySelector('.cart-body').insertAdjacentHTML(
			'afterbegin',
			`<div class="row">
			<input readonly class="product3"></input>
			<input readonly class="amount3"></input>
			</div>`)
			$('.product3').val("Cult of the Lumb");
			$('.amount3').val(cart[i]);
					break;
			
				case 4:
					//var t = "Product5";
					document.querySelector('.cart-body').insertAdjacentHTML(
			'afterbegin',
			`<div class="row">
			<input readonly class="product4"></input>
			<input readonly class="amount4"></input>
			</div>`)
			$('.product4').val("Stray");
			$('.amount4').val(cart[i]);
					break;
				case 5:
					//var t = "Product6";
					document.querySelector('.cart-body').insertAdjacentHTML(
			'afterbegin',
			`<div class="row">
			<input readonly class="product5"></input>
			<input readonly class="amount5"></input>
			</div>`)
			$('.product5').val("6");
			$('.amount5').val(cart[i]);
					break;
				case 6:
					//var t = "Product7";
					document.querySelector('.cart-body').insertAdjacentHTML(
			'afterbegin',
			`<div class="row">
			<input readonly class="product6"></input>
			<input readonly class="amount6"></input>
			</div>`)
			$('.product6').val("7");
			$('.amount6').val(cart[i]);
					break;

				case 7: 
					//var t = "Product8";
					document.querySelector('.cart-body').insertAdjacentHTML(
			'afterbegin',
			`<div class="row">
			<input readonly class="product7"></input>
			<input readonly class="amount7"></input>
			</div>`)
			$('.product7').val("8");
			$('.amount7').val(cart[i]);
					break;
		
				case 8:
					//var t = "Product9";
					document.querySelector('.cart-body').insertAdjacentHTML(
			'afterbegin',
			`<div class="row">
			<input readonly class="product8"></input>
			<input readonly class="amount8"></input>
			</div>`)
			$('.product8').val("9");
			$('.amount8').val(cart[i]);
					break;
			
				case 9:
					//var t = "Product10";
					document.querySelector('.cart-body').insertAdjacentHTML(
			'afterbegin',
			`<div class="row">
			<input readonly class="product9"></input>
			<input readonly class="amount9"></input>
			</div>`)
			$('.product9').val("10");
			$('.amount9').val(cart[i]);
					break;
			
				case 10:
					//var t = "Product11";
					document.querySelector('.cart-body').insertAdjacentHTML(
			'afterbegin',
			`<div class="row">
			<input readonly class="product10"></input>
			<input readonly class="amount10"></input>
			</div>`)
			$('.product10').val("11");
			$('.amount10').val(cart[i]);
					break;
				case 11:
					//var t = "Product12";
					document.querySelector('.cart-body').insertAdjacentHTML(
			'afterbegin',
			`<div class="row">
			<input readonly class="product11"></input>
			<input readonly class="amount11"></input>
			</div>`)
			$('.product11').val("12");
			$('.amount11').val(cart[i]);
					break;
					
				default:
		
				break;
			}
		//$('.product').val(t);
		//$('.amount').val(cart[i]);
		}
		}
	}
	
	window.clearCart = function clearCart(){
		for(let i=0; i<cart.length; i++){
			cart[i]=0;
		}
	}
	$('.cart-link').on('click', function(){
		console.log(cart);
		$('.cart-body').html('');
		addRow();
	});
	
	$('.btn-order').on('click', function() {
		//console.log(cart.length);
		for(let i=0; i<cart.length; i++){
		if(cart[i] != null){
			if(cart[i] >0) {
			var product_n = i;
			var amount = cart[i];
				$.ajax({
					type: "POST",
                    url:'/../php/insert.php',
                    method:'POST',
                    data:{
                        product_n:product_n,
                        amount:amount
                    },
                   success:function(data){
                       alert(data);
                   }
                });
			}
		}
		}
	});
	
});
