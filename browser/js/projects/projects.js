app.config(function ($stateProvider) {
    $stateProvider.state('projects', {
        url: '/projects',
        templateUrl: 'js/projects/projects.html',
        controller: 'projectsCtrl'
    });
});

app.controller('projectsCtrl', function($scope){
  $scope.projects = [
    { name: 'Universal Studio Adventure', link: 'http://www.imageno.com/thumbs/20170108/qxnjk3ifx5am.jpg', blurb: 'A microsite that allows Con Edison customers to sign up for the Smart AC program', color: 'yellow2'},
    { name: 'Washington DC', link: 'http://www.myspellbook.org', blurb: 'An interactive story book that teaches children basic programming logic', color: 'purple1'},
    { name: 'Vancouver Canada', link: 'https://dance-party.herokuapp.com/', blurb: 'An interactive dance party with some of your favorite Fullstack Academy characters', color:'green1'},
    { hide: true},
    { name: 'San Francisco', link: '/gcf', blurb: 'Action journey that encouraged users to take action to end extreme poverty', color:'pink1'}
  ];
});
