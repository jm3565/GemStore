(function(){
	var app = angular.module('store-directives', []);
	
	// Control Directive
	app.directive('productPanels', function(){
		return {
			restrict: 'E',
			templateUrl: '../src/templates/product-panels.html',
			controllerAs: 'panel',
			controller: function(){
				this.tab = 3;
		
				this.selectTab = function(setTab){
					this.tab = setTab;	
				};
				
				this.isSelected = function(checkTab){
					return this.tab === checkTab;	
				};
			}	
		};
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
})();