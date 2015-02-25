linkMachine.factory('CategoriesFactory', function CategoriesFactory() {
  var factory = {};
  factory.categories = [];
  factory.addCategory = function() {
    factory.categories.push({ name: factory.categoryName, id: factory.categories.length + 1, links: [] });
    factory.categoryName = null;
  };

  return factory;
});
