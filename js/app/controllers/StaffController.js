function StaffController($scope) {
  var vm = this;

  vm.name = "Christina";
  vm.email = "christina@example.com";
  vm.phone = "555-1213";
}

angular
  .module('app')
  .controller('StaffController', StaffController);
