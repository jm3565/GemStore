(function(){
	var app = angular.module('gemStore', []);
	
	app.controller('StoreController', function(){
		this.products = gems;
		this.ratings = ratings;
	});
	
	app.controller('PanelController', function(){
		this.tab = 3;
		
		this.selectTab = function(setTab){
			this.tab = setTab;	
		};
		
		this.isSelected = function(checkTab){
			return this.tab === checkTab;	
		};
	});
	
	app.controller('ReviewController', function(){
		this.newReview = {};
		
		this.addReview = function(product){
			this.newReview.createdOn = Date.now();
			this.newReview.stars = this._parseRating(this.newReview.stars);
			product.reviews.push(this.newReview);
			this.newReview = {};
		}
		
		this._parseRating = function(rtng){
			return rtng.split(" ")[0]
		}
	});
	
	// Name of the directives need to be in camelCase
	app.directive('productDescription', function(){
		return {
			restrict: 'E',
			templateUrl: '../src/templates/product-description.html'
		};
	});
	
	app.directive('productSpecs', function(){
		return {
			restrict: 'A',
			templateUrl: '../src/templates/product-specs.html'
		};
	});
	
	app.directive('productReviews', function(){
		return {
			restrict: 'E',
			templateUrl: '../src/templates/product-reviews.html'
		}
	});
	
	var ratings = [
		{
			name: '1 Star',
			value: 1
		},{
			name: '2 Stars',
			value: 2
		},{
			name: '3 Stars',
			value: 3
		},{
			name: '4 Stars',
			value: 4
		},{
			name: '5 Stars',
			value: 5
		}
	]
	
	var gems = [
		{
			name: 'Dodge Charger',
			price: 2,
			description: '...',
			canPurchase: true,
			soldOut: false,
			image: '../images/muscle_dodge.jpg',
			reviews: [{
				stars: 4,
				body: 'Awesome car!',
				author: 'Me'
			}]
		},{
			name: 'Chevrolet Corvette',
			price: 5.9,
			description: '...',
			canPurchase: true,
			soldOut: false,
			image: '../images/corvette.jpg',
			reviews: []
		},{
			name: 'Ford Shelby GT500',
			price: 5.9,
			description: '...',
			canPurchase: true,
			soldOut: false,
			image: '../images/ford_shelby_gt500.jpg',
			reviews: []
		},{
			name: 'Ford GT500 Eleanor',
			price: 5.9,
			description: '...',
			canPurchase: true,
			soldOut: false,
			image: '../images/gt500_eleanor.jpg',
			reviews: []
		}		
	];
})();

