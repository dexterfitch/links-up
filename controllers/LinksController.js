linkMachine.controller('LinksCtrl', function LinksCtrl($scope, $stateParams, CategoriesFactory, UtilitiesFactory) {
  $scope.category = UtilitiesFactory.findById(CategoriesFactory.categories, $stateParams.categoryId)

  $scope.addLink = function() {
    $scope.category.links.push({ name: $scope.linkName, website: $scope.webSite, rating: 0 });
    $scope.linkName = null;
    $scope.webSite = null;
  };

  $scope.addToRating = function(link) {
    var index = factory.links.indexOf(link);
    factory.links[index].rating += 1;
  };

  $scope.subtractFromRating = function(link) {
    var index = factory.links.indexOf(link);
    factory.links[index].rating -= 1;
  };

});
