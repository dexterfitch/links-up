linkMachine.controller('LinksCtrl', function LinksCtrl($scope, $stateParams, CategoriesFactory, UtilitiesFactory) {
  $scope.category = UtilitiesFactory.findById(CategoriesFactory.categories, $stateParams.categoryId)
  $scope.$parentScope = $scope

  $scope.addLink = function() {

    $scope.category.links.push({
      name: $scope.linkName,
      website: $scope.webSite,
      comments: [],
      rating: 0,
      dateNow: Date.now(),

      addToRating: function() {
        this.rating++;

      },

      subtractFromRating: function() {
        this.rating--;
      },


      addComment: function(comment) {
        this.comments.push(comment);
        $scope.comment = null;
      }

    });

    $scope.linkName = null;
    $scope.webSite = null;
  };

 });
