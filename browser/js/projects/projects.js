app.config(function ($stateProvider) {
    $stateProvider.state('projects', {
        url: '/projects',
        templateUrl: 'js/projects/projects.html',
        controller: 'projectsCtrl'
    });
});

app.controller('projectsCtrl', function($scope){
  $scope.projects = [
    { name: 'SpellBook', link: 'http://www.myspellbook.org', blurb: 'An interactive story book that teaches children basic programming logic'},
    { name: 'Dance Party', link: 'https://dance-party.herokuapp.com/', blurb: 'An interactive dance party with some of your favorite Fullstack Academy characters'},
    { name: 'Global Citizen Festival', link: '', blurb: 'Action journey that encouraged users to take action to end extreme poverty'}
  ];
});