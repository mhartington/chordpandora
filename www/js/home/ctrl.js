(function(){

angular.module('chordPandora.home', [])

.controller('HomeCtrl', homeCtrl)

function homeCtrl() {
	var vm = this;
	
	vm.chordPressed = chordPressed;
	
   vm.chordPressed();	
	
	function chordPressed() {
     //cordova.plugins.Keyboard.show();		
	}
}
})()
