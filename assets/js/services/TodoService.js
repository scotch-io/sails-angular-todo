todoApp.service('TodoService', function($http, $q) {
  return {
    'getTodos': function() {
      var defer = $q.defer();
      $http.get('/todo/getTodos').success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    'addTodo': function(todo) {
      console.log(todo);
      var defer = $q.defer();
      $http.post('/todo/addTodo', todo).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    'removeTodo': function(todo) {
      console.log(todo);
      var defer = $q.defer();
      $http.post('/todo/removeTodo', todo).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    }
  }})