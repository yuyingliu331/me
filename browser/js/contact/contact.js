app.config(function ($stateProvider) {
    $stateProvider.state('contact', {
        url: '/contact',
        templateUrl: 'js/contact/contact.html',
        controller: 'contactCtrl'
    });
});

app.controller('contactCtrl', function($scope, MENU){
  console.log('contact');
  $scope.menu = MENU;
});