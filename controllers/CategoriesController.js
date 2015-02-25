linkMachine.controller('CategoriesCtrl', function CategoriesCtrl($scope, CategoriesFactory) {
  $scope.categories = CategoriesFactory.categories;
  $scope.CategoriesFactory = CategoriesFactory;
});
