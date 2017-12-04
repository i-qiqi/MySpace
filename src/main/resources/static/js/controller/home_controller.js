'use strict';

App.controller('HomeController', function($scope) {
});

App.controller('AlbumController', function($scope) {
	$scope.myInterval = 2000;
	  $scope.noWrapSlides = false;
	  $scope.active = 0;
	  var slides = $scope.slides = [];
	  var currIndex = 0;
	  $scope.imageUrl =  '//unsplash.it/';
	  
	  $scope.addSlide = function() {
	    var newWidth = 600 + slides.length + 99; 
	    slides.push({
	      image: $scope.imageUrl + newWidth + '/470',
	      text: ['Nice image','Awesome photograph','That is so cool','I love that'][slides.length % 4],
	      id: currIndex++
	    });
	  };

	  $scope.randomize = function() {
	    var indexes = generateIndexesArray();
	    assignNewIndexesToSlides(indexes);
	  };

	  // Randomize logic below

	  function assignNewIndexesToSlides(indexes) {
	    for (var i = 0, l = slides.length; i < l; i++) {
	      slides[i].id = indexes.pop();
	    }
	  }

	  function generateIndexesArray() {
	    var indexes = [];
	    for (var i = 0; i < currIndex; ++i) {
	      indexes[i] = i;
	    }
	    return shuffle(indexes);
	  }

	  // http://stackoverflow.com/questions/962802#962890
	  function shuffle(array) {
	    var tmp, current, top = array.length;

	    if (top) {
	      while (--top) {
	        current = Math.floor(Math.random() * (top + 1));
	        tmp = array[current];
	        array[current] = array[top];
	        array[top] = tmp;
	      }
	    }

	    return array;
	  }
	  
	  //init()
	  $scope.init = function(){
		  if($scope.currentUser.userName == "First"){
			  $scope.imageUrl =  '//placekitten.com/';
		  }
		  for (var i = 0; i < 10; i++) {
			    $scope.addSlide();
		  }

	  }
	  $scope.init();
});