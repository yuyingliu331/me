app.directive('navbar', function ($rootScope, $state, MENU, $location) {

    return {
        restrict: 'E',
        templateUrl: 'js/common/directives/navbar/navbar.html',
        link: function(scope){
          scope.menu = MENU;
          scope.home = $rootScope.home;
          scope.showmenu;
          scope.isMobile;

          angular.element(document).ready(function(){
            scope.showmenu = (document.querySelector('#hamburger').clientHeight === 0);
            scope.isMobile = document.querySelector('#hamburger').clientHeight === 0;
          });
        }
    }
});
