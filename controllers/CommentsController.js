linkMachiine.controller('CommentsCtrl', function CommentsCtrl($scope, $stateParams, CategoriesFactory, UtilitiesFactory) {
  $scope.category.link = UtilitiesFactory.findById(CategoriesFactory.categories.links, $stateParams.categoryId)
  $scope.addComment = function() {
    $scope.categories.links.comments.push({ description: $scope.commentDescription });
    $scope.commentDescription = null;
  }
});
