function ContactController($scope) {
  var vm = this;
  vm.name = "Bob";
  vm.email = "bob@example.com";
  vm.phone = "555-1212";

  this.changeName = function() {
    vm.name = "Steve";
  }
}

angular
  .module('app')
  .controller('ContactController', ContactController);
