linksMachine.factory('CategoriesFactory', function CategoriesFactory() {
  var factory = {};
  factory.categories = [];
  factory.addCategory = function() {
    factory.categories.push({ name: factory.categoryName, id: factory.links.length + 1 });
    factory.categoryName = null;
  };

  return factory;
});
