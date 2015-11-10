app.directive('navbar', function ($rootScope, $state, MENU, $location) {

    return {
        restrict: 'E',
        templateUrl: 'js/common/directives/navbar/navbar.html',
        link: function(scope){
          scope.menu = MENU;
          scope.home = $rootScope.home;
        }
    }
});
