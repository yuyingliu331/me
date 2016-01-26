app.config(function ($stateProvider) {
    $stateProvider.state('gcfestival', {
        url: '/gcf',
        templateUrl: 'js/individual_projects/gcfestival/gcfestival.html',
        controller: 'gcfCtrl'
    });
});

app.controller('gcfCtrl', function($scope){
  
});