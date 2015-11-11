app.config(function ($stateProvider) {
    $stateProvider.state('recipes', {
        url: '/recipes',
        templateUrl: 'js/recipes/recipes.html',
        controller: 'recipesCtrl'
    });
});

app.controller('recipesCtrl', function($scope){
  $scope.apps = [
    { name: 'Spinach Artichoke Dip', link: 'http://www.foodnetwork.com/recipes/alton-brown/hot-spinach-and-artichoke-dip-recipe.html'},
    { name: 'Bruschetta', link: 'http://www.simplyrecipes.com/recipes/bruschetta_with_tomato_and_basil/'},
    { name: 'Kale and Squash Salad', link: 'http://thepioneerwoman.com/cooking/2014/11/butternut-squash-and-kale/'},
    { name: 'Fresh Tomato and Corn Salad', link: 'http://www.foodnetwork.com/recipes/food-network-kitchens/fresh-corn-tomato-salad-recipe.html'}
  ];

  $scope.sides = [
    { name: 'Sweet Potato Fries', link: 'http://www.foodnetwork.com/recipes/paula-deen/baked-sweet-potato-fries-recipe.html'},
    { name: 'Chicken Salad (my own recipe)', link: '#'},
    { name: 'Brussel Sprouts', link: 'http://steamykitchen.com/27757-roasted-brussels-sprouts-with-sweet-chili-sauce-recipe-video.html'},
    { name: 'All vegetables, in general', link: '#'}
  ];

  $scope.mains = [
    { name: 'Chicken Marbella', link: 'http://www.simplyrecipes.com/recipes/chicken_marbella/'},
    { name: 'Chicken Marsala with Sage', link: 'http://www.bonappetit.com/recipe/chicken-marsala-with-sage'},
    { name: 'Eggplant Parm', link: 'http://www.foodnetwork.com/recipes/mario-batali/eggplant-parmigiana-recipe.html'},
    { name: 'Beef Stew', link: 'http://thepioneerwoman.com/cooking/sunday-night-stew/'},
    { name: 'Chicken Noodle Soup', link: '#'}
  ];

  $scope.desserts = [
    { name: 'Chocolate Meringues', link: 'http://allrecipes.com/recipe/10751/chocolate-meringue-cookies/'},
    { name: 'Flourless Chocolate Cake', link: 'http://www.chow.com/recipes/14636-1-favorite-chocolate-flourless-cake'},
    { name: 'Classic Chocolate Chip Cookies', link: '#'},
    { name: 'Black Bottom Cupcakes', link: 'http://allrecipes.com/recipe/15503/grandma-gudgels-black-bottom-cupcakes/'}
  ];
});