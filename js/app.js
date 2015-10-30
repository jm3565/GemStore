(function(){
	var app = angular.module('gemStore', []);
	
	app.controller('StoreController', function(){
		this.products = gems;
	});
	
	var gems = [
		{
			name: 'B',
			price: 2.95,
			description: '...',
			canPurchase: true,
			soldOut: true
		},
		{
			name: 'A',
			price: 2.95,
			description: '...',
			canPurchase: true,
			soldOut: false
		}	
	];
})();

