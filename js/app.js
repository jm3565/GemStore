(function(){
	var app = angular.module('gemStore', []);
	
	app.controller('StoreController', function(){
		this.products = gems;
	});
	
	var gems = [
		{
			name: 'B',
			price: 2,
			description: '...',
			canPurchase: true,
			soldOut: false,
			image: '../images/muscle_dodge.jpg'
		},
		{
			name: 'A',
			price: 5.9,
			description: '...',
			canPurchase: true,
			soldOut: false,
			image: '../images/corvette.jpg'
		},	
		{
			name: 'A',
			price: 5.9,
			description: '...',
			canPurchase: true,
			soldOut: false,
			image: '../images/ford_shelby_gt500.jpg'
		},
		{
			name: 'A',
			price: 5.9,
			description: '...',
			canPurchase: true,
			soldOut: false,
			image: '../images/gt500_eleanor.jpg'
		}		
	];
})();

