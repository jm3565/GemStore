(function(){
	var app = angular.module('gemStore', []);
	
	app.controller('StoreController', function(){
		this.products = gems;
	});
	
	app.controller('PanelController', function(){
		this.tab = 1;
		
		this.selectTab = function(setTab){
			this.tab = setTab;	
		};
		
		this.isSelected = function(checkTab){
			return this.tab === checkTab;	
		};
	});
	
	var gems = [
		{
			name: 'Dodge Charger',
			price: 2,
			description: '...',
			canPurchase: true,
			soldOut: false,
			image: '../images/muscle_dodge.jpg'
		},
		{
			name: 'Chevrolet Corvette',
			price: 5.9,
			description: '...',
			canPurchase: true,
			soldOut: false,
			image: '../images/corvette.jpg'
		},	
		{
			name: 'Ford Shelby GT500',
			price: 5.9,
			description: '...',
			canPurchase: true,
			soldOut: false,
			image: '../images/ford_shelby_gt500.jpg'
		},
		{
			name: 'Ford GT500 Eleanor',
			price: 5.9,
			description: '...',
			canPurchase: true,
			soldOut: false,
			image: '../images/gt500_eleanor.jpg'
		}		
	];
})();

