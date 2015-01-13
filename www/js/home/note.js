(function(){

angular.module('chordPandora.home')

.directive('note', note)

function note() {	
   var directive = {
	  restrict: 'EA',
	  link: link,
	  scope: {pitch: '='},
	  templateUrl: 'templates/directives/note.html',
	  controllerAs: 'vm',
	  controller: NoteCtrl
	};

   return directive;
      
   function link(scope, el, attr, ctrl) {
     el[0].click(function() {
       el[0].addClass('positive')     
     })
	}
}

NoteCtrl.$inject = ['$scope'];

function NoteCtrl($scope) {
  // Injecting $scope just for comparison
  var vm = this;
  
  vm.pitch = $scope.pitch;
  
  vm.clicked_note = false;
  
  vm.clicked = clicked;
  
  function clicked() {
    vm.clicked_note = !vm.clicked_note;  
  
  }
}
})()
