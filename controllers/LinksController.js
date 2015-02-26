linkMachine.controller('LinksCtrl', function LinksCtrl($scope, $stateParams, CategoriesFactory, UtilitiesFactory) {
  $scope.category = UtilitiesFactory.findById(CategoriesFactory.categories, $stateParams.categoryId)

  $scope.addLink = function() {
    $scope.category.links.push({
      name: $scope.linkName,
      website: $scope.webSite,
      comment: $scope.comment,
      rating: 0,

      addToRating: function() {
        this.rating += 1;
      },

      subtractFromRating: function() {
        this.rating -= 1;
      },

      addComment: function() {
        comment.push(comment);
      }

    });

    $scope.linkName = null;
    $scope.webSite = null;


  };
});
