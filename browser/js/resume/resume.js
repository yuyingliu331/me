app.config(function ($stateProvider) {
    $stateProvider.state('resume', {
        url: '/resume',
        templateUrl: 'js/resume/resume.html',
        controller: 'resumeCtrl'
    });
});

app.controller('resumeCtrl', function($scope){
    $scope.width = document.querySelector('#full-width').clientWidth / 5;
	  $scope.education = [
  		{ 
        label: 'Education', 
        dates: '', 
        title: '', 
        flip: false, 
        back: '', 
        color: 'purple-text'
      },
      { 
        label: 'Fullstack Academy', 
        dates: '2015', 
        title: '', 
        flip: true, 
        back: 'Immersive software development bootcamp, focusing on JavaScript and the MEAN stack',
        color:'purple1'
      },
      { 
        label: 'Tufts University', 
        dates: '2013', 
        title: '', 
        flip: true, 
        back:'Bachelor of Arts in Psychology',
        color: 'purple2'
      },
      { 
        label: 'IES Abroad: Madrid', 
        dates: 2012, 
        title: '', 
        flip: true, 
        back: 'Spanish immersion program. Attended classes at the Universidad Complutense de Madrid.',
        color: 'purple3'
      }
    ];

    $scope.experience = [
      { 
        label: 'Communications Officer & Website Manager', 
        dates: 'Jun 2013 - present', 
        title: 'Katz\'s Deli', 
        flip: true, 
        back: 'Plan and create social media content for Twitter, Facebook and Instagram daily. Oversee the redesign of the Katz\'s Deli website.', 
        color: 'green1'
      },
      { 
        label: '', 
        dates: '', 
        title: '', 
        flip: false, 
        back: '', 
        color: 'green2'
      },
      { 
        label: 'Experience', 
        dates: '', 
        title: '', 
        flip: false, 
        back: '', 
        color: 'green-text'
      },
      { 
        label: 'Front End Web Developer and Designer', 
        dates: 'Apr 2014 - May 2015', 
        title: 'Global Citizen', 
        flip: true, 
        back: 'Create, edit and design pages for globalcitizen.org. Ensure that the website is mobile and tablet friendly. Use Photoshop to create visually stimulating elements.', 
        color: 'green2'
      },
      { 
        label: 'Global Citizen Coordinator', 
        dates: 'Jun 2013 - Apr 2014', 
        title: 'Global Citizen', 
        flip: true, 
        back: 'Responsible for procuring and publicizing shows from over 200 artists worldwide. Acted as liaison between artist managers and ticket winners.', 
        color: 'green2'
      },
      { 
        label: 'Freelance Web Design', 
        dates: 'Mar 2014 - present', 
        title: '', 
        flip: true, 
        back: 'Design and build custom pages. Tailored each website to individual client\'s needs and desired style.', 
        color: 'green3'
      },
      { 
        label: 'Research Assistant', 
        dates: 'Sep 2011 - May 2013', 
        title: 'Tufts University', 
        flip: true, 
        back: 'Ran experimental sessions for six studies, ten hours per week. Recorded, organized, and prepared data for analysis. Assisted in the planning of interracial interaction studies.', 
        color: 'green1'
      },
      { 
        label: 'Outreach Director', 
        dates: 'Jun 2012 - Sep 2012', 
        title: 'Millennium Campus Network', 
        flip: true, 
        back: 'Recruited 1000+ student leaders from around the country for a conference. Helped organize, plan, and run the Millennium Campus Conference 2012.', 
        color: 'green3'
      }
    ];

    $scope.leadership = [
      { 
        label: 'Hospitality Executive', 
        dates: 'Dec 2009 - May 2013', 
        title: 'Tufts University Concert Board', 
        flip: true, 
        back: 'In charge of 10-15 concert board members before and during shows. Responsible for any requests made by artists during the show. Provided food and supplies in preparation for the artist\'s arrival.', 
        color: 'yellow1'
      },
      { 
        label: 'Leadership', 
        dates: '', 
        title: '', 
        flip: false, 
        back: '', 
        color: 'yellow-text'
      },
      { 
        label: 'Group Leader', 
        dates: 'Sep 2011', 
        title: 'FOCUS Pre-Orientation', 
        flip: true, 
        back: 'Responsible for the safety of eight freshmen. Helped the new students acclimate to life at Tufts.', 
        color: 'yellow2'
      },
      { 
        label: 'Head Waiter', 
        dates: 'Jun 2010', 
        title: 'Katz\'s Deli', 
        flip: true, 
        back: 'Waited on 20-40 people at once in a high stress environment. Personally responsible for the satisfaction of each customer.', 
        color: 'yellow3'
      }

    ];

    $scope.volunteer = [
      { 
        label: 'Volunteer', 
        dates: '', 
        title: '', 
        flip: false, 
        back: '', 
        color: 'blue-text'
      },
      { 
        label: 'Volunteer Coder', 
        dates: 'Oct 2015 - present', 
        title: 'SocialCoder', 
        flip: true, 
        back: 'Create and edit pages and test security for different charities as needed.', 
        color: 'blue1'
      },
      { 
        label: 'Buddy', 
        dates: 'Sep 2010 - May 2011', 
        title: 'Best Buddies Program', 
        flip: true, 
        back: 'Spent two hours weekly with a mentally handicapped woman. Helped her acclimate to new situations. Explored ways to alleviate her social anxiety.', 
        color: 'blue2'
      },
      { 
        label: 'Volunteer', 
        dates: 'Jun 2008 - Jul 2008', 
        title: 'The Road Less Traveled', 
        flip: true, 
        back: 'Assisted in trash cleanup throughout Bhutan. Helped restore temples and homes. Helped secondary school students apply to university.', 
        color: 'blue3'
      }

    ];


});