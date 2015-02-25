var linkMachine = angular.module('linkMachine', ['ui.router']);

linkMachine.config(function($stateProvider) {
  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html"
  });

  $stateProvider.state('categories', {
    url: "/categories",
    templateUrl: "partials/categories.html",
    controller: 'CategoriesCtrl'
  });

  $stateProvider.state('categories.links', {
    url: "/:categoryId",
    templateUrl: "partials/categories.links.html",
    controller: 'LinksCtrl'
  });
});
