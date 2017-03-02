var app=angular.module('app',[]);
app.controller('todo',function($scope){
var arr=[];
var finalList;
$scope.todoAdd= function(){
	var todoText=$scope.todoInput;
	arr.push(todoText);
	$scope.finalList=arr;
	$scope.todoInput="";

};

$scope.delete = function(x){
	arr.splice(x,1);
};



});

