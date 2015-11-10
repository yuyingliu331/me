app.config(function ($stateProvider) {
    $stateProvider.state('skills', {
        url: '/skills',
        templateUrl: 'js/skills/skills.html',
        controller: 'skillsCtrl'
    });
});

app.controller('skillsCtrl', function($scope, MENU){
  $scope.skills = [
    { label: 'JavaScript', skill: 10},
    { label: 'Angular', skill: 9},
    { label: 'JS-Data', skill: 8},
    { label: 'jQuery', skill: 10},
    { label: 'ES6', skill: 8},
    { label: 'HTML', skill: 10},
    { label: 'CSS', skill: 10},
    { label: 'SCSS', skill: 10},
    { label: 'Adobe Photoshop', skill: 9},
    { label: 'Bootstrap', skill: 9},
    { label: 'Node/Express', skill: 9},
    { label: 'MongoDB', skill: 10},
    { label: 'MySQL', skill: 9},
    { label: 'SQL', skill: 8},
    { label: 'lodash', skill: 8},
    { label: 'Socket.io', skill: 8},
    { label: 'Git', skill: 10},
    { label: 'Gulp', skill: 9},
    { label: 'D3', skill: 9},
    { label: 'Mocha', skill: 8},
    { label: 'Chai', skill: 8}
  ];

var w = document.querySelector('.chart').clientWidth/15 * 14.3;
;
var h = 250;

var xScale = d3.scale.linear()
        .domain([0, 10])
        .range([0, w]);

var label = function(d) {
  return d.label;
};

//Create SVG element

//Create bars

var color2 = ['#D276C0', '#9f3089', '#f063d4', '#cb21aa'];
var color=['#5BBBF3', '#3482AF', '#1EA0EB', '#275082'];
var svg = d3.select(".chart")
  .selectAll("div")
    .data($scope.skills, label)
  .enter().append("div")
    .style("width", function(d) { return xScale(d.skill) + "px"; })
    .style('background-color', function(d, i) { return color[i%4]; })
    .style('padding', '1%')
    .style('margin', '1%')
    .text(function(d) { return d.label; });


});