app.config(function ($stateProvider) {
    $stateProvider.state('projects', {
        url: '/projects',
        templateUrl: 'js/projects/projects.html',
        controller: 'projectsCtrl'
    });
});

app.controller('projectsCtrl', function($scope){
  $scope.projects = [
    { name: 'ConEd Smart AC Signup', link: 'https://conedsmartac.com/', blurb: 'A microsite that allows Con Edison customers to sign up for the Smart AC program', color: 'yellow2'},
    { name: 'SpellBook', link: 'http://www.myspellbook.org', blurb: 'An interactive story book that teaches children basic programming logic', color: 'purple1'},
    { name: 'Dance Party', link: 'https://dance-party.herokuapp.com/', blurb: 'An interactive dance party with some of your favorite Fullstack Academy characters', color:'green1'},
    { hide: true},
    { name: 'Global Citizen Festival', link: '/gcf', blurb: 'Action journey that encouraged users to take action to end extreme poverty', color:'pink1'}
  ];
});