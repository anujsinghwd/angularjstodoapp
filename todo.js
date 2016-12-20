var app = angular.module("myApp",[]);
app.controller("TodoCtrl",function($scope){

	$scope.todos = [];

	$scope.getTotaltodos = function(){
		return $scope.todos.length;
	 };

	$scope.RemoveCompleted = function(){
		$scope.todos  = _.filter($scope.todos,function(todo){
			return !todo.done;
		})
	};

	$scope.addTodo = function(){
		if ($scope.formTodoText) {
		$scope.todos.push({text:$scope.formTodoText , done : false})
		$scope.formTodoText = '';
		}
	};
	
});