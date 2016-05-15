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

// var w = document.querySelector('.chart').clientWidth/15 * 14.3;



// var h = 250;

// var xScale = d3.scale.linear()
//         .domain([0, 10])
//         .range([0, w]);

// var label = function(d) {
//   return d.label;
// };

// //Create SVG element

// //Create bars

// var color2 = ['#D276C0', '#9f3089', '#f063d4', '#cb21aa'];
// var color=['#5BBBF3', '#3482AF', '#1EA0EB', '#275082'];
// var svg = d3.select(".chart")
//   .selectAll("div")
//     .data($scope.skills, label)
//   .enter().append("div")
//     .style("width", function(d) { return xScale(d.skill) + "px"; })
//     .style("height", '6vh')
//     .style('background-color', function(d, i) { return color[i%4]; })
//     .style('padding', '1%')
//     .style('margin', '1%')
//     .text(function(d) { return d.label; });


$scope.colors = [
  '#5BBBF3', '#3482AF', '#1EA0EB', '#275082', '#945EDB', '#8770C0', '#7139BC', '#5D23AA', '#C79DFF', '#76D289', '#237234', '#4EA25F', '#7DC58C', '#F7C63F', '#D19D0D', '#FFC31C', '#FFB100', '#f063d4', '#AE3D98', '#FF95EA', '#BD0E9A'];

var width = document.querySelector('.sizing').clientWidth,
    height = width,
    radius = Math.min(width, height) / 2;

var color = d3.scale.ordinal()
    .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

var colors = [
  ['#5BBBF3', '#3482AF', '#1EA0EB', '#275082'],
  ['#945EDB', '#8770C0', '#7139BC', '#5D23AA', '#C79DFF'],
  ['#76D289', '#237234', '#4EA25F', '#C9FFD4'],
  ['#F7C63F', '#D19D0D', '#FFC31C', '#FFDF86'],
  ['#f063d4', '#AE3D98', '#FF95EA', '#BD0E9A']
];

var arc = d3.svg.arc()
    .outerRadius(radius - 10)
    .innerRadius(radius - 70);

var pie = d3.layout.pie()
    .sort(null)
    .value(function(d) { return d.level; });

var dataset = [
  [
    { skill: 'JavaScript', level: 35},
    { skill: 'JSData', level: 15},
    { skill: 'Angular', level:30},
    { skill: 'ES6', level: 20}
  ],
  [
    { skill: 'HTML', level: 25},
    { skill: 'CSS', level: 23},
    { skill: 'SASS', level:15},
    { skill: 'Bootstrap', level: 14},
    { skill: 'Photoshop', level: 23}
  ],
  [
    { skill: 'lodash', level: 25},
    { skill: 'jQuery', level: 30},
    { skill: 'socket.io', level:20},
    { skill: 'D3', level: 25}
  ],
  [
    { skill: 'Node/Express', level: 30},
    { skill: 'MongoDB', level: 30},
    { skill: 'MySQL', level:20},
    { skill: 'SQL', level: 20}
  ],
  [
    { skill: 'Mocha', level: 17},
    { skill: 'Chai', level: 17},
    { skill: 'Gulp', level: 31},
    { skill: 'Git', level: 35}
  ]
];

var pie_labels = ['Front End', 'Design', 'JS Libraries', 'Back End', 'Other'];
dataset.forEach(function(data, index){

  // console.log(data);
  var svg2 = d3.select(".pie-charts").append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");



  data.forEach(function(d) {
    d.level = +d.level;
  });

  var g = svg2.selectAll(".arc")
      .data(pie(data))
    .enter().append("g")
      .attr("class", "arc");

  g.append("path")
      .attr("d", arc)
      .style("fill", function(d, i) { return colors[index][i]; });

  g.append("text")
      .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
      .attr("dy", ".35em")
      .style("text-anchor", "middle")
      .text(function(d) { return d.data.skill; });


  svg2.append("text")
            .attr('dy', '-.3em')
            .attr("text-anchor", "middle")
            .attr('font-weight', 'bold')
            .text(function(d, i){
                return pie_labels[index];
            })
});



});