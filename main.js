var app = angular.module("redditApp", []);
app.controller("RedditController", function($scope) {
  $scope.greeting = "Welcome to Costume Competition.";
  $scope.sort= "-votes",
  $scope.time = moment($scope.timetwo).format("MMM Do YY"),
  $scope.timetwo = new Date(),
  $scope.newposts= {
    title: "",
    author: "",
    image: "",
    description: "",
    votes: 0,
    comments: [],
    time: $scope.time
  };

  $scope.posts = [
    { title: "Scream",
      author: "ScaryDude101",
      image: "http://screencrush.com/442/files/2013/07/scream-4.jpg",
      description: "The best costume to scare all of your friends",
      votes: -5,
      comments: [],
      time: "Oct 25th 15"
    }, 
      { title: "Sully",
      author: "IloveMon$ters",
      image: "http://images.costumeexpress.com/mgen/monsters-university-sulley-classic-toddler-child-costume-cx-805030.jpg?zm=1600,1600,1,0,0",
      description: "For the friendly monster fans out there",
      votes: 15,
      comments: ["this is so cool", "this costume is soooo last year"],
      time: "Oct 7th 15"
    },
     { title: "Viking",
      author: "Bunny",
      image: "https://scontent.xx.fbcdn.net/hphotos-xfp1/v/t1.0-9/12188997_10208095150877596_848847955176459708_n.jpg?oh=076a3751975d92f7fb5eec8aca1ef538&oe=56B90C95",
      description: "No explination needed",
      votes: 3,
      comments: ["this is so cute", "bunnys are great"],
      time: "Oct 8th 15"
    },
    { title: "KFC",
      author: "SouthernBell2020",
      image: "  https://malialitman.files.wordpress.com/2014/10/funny-halloween-costume-four.jpg",
      description: "This costume is finger lickin good",
      votes: -1,
      comments: ["makes me hungry", "Seriously??!?!?!?!?! LAMEEEEE COSTUME"],
      time: "Oct 8th 15"
    }
  ];
    $scope.addPost = function(){
      $scope.posts.push(angular.copy($scope.newposts));
    };
    $scope.submitForm = function(isValid) {
    // check to make sure the form is completely valid
    if (isValid) {
      $scope.addPost();
    };
  };
});