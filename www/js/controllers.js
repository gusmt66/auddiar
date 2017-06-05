var controllerModule = angular.module('blank.controllers', []);
 
controllerModule.controller("AppCtrl", function($scope,$location, $state, $ionicPlatform, $cordovaOauth){
 
      $scope.go = function ( path ) {
        $location.path( path );
      };

    $scope.showCatdet= function(){
      document.getElementById("categorias").classList.remove("mostrar");
      document.getElementById("categorias").classList.add("ocultar");
      document.getElementById("categoriadetalle").classList.remove("ocultar");
      document.getElementById("categoriadetalle").classList.add("mostrar");
      
    };

    $scope.hideCatdet= function(){
      document.getElementById("categoriadetalle").classList.remove("mostrar");
      document.getElementById("categoriadetalle").classList.add("ocultar");
      document.getElementById("categorias").classList.remove("ocultar");	
      document.getElementById("categorias").classList.add("mostrar");
    };

    $scope.showAutdet= function(){
      document.getElementById("vista-autores").classList.remove("mostrar");
      document.getElementById("vista-autores").classList.add("ocultar");
      document.getElementById("autordetalle").classList.remove("ocultar");
      document.getElementById("autordetalle").classList.add("mostrar");
      
    };

    $scope.hideAutdet= function(){
      document.getElementById("autordetalle").classList.remove("mostrar");
      document.getElementById("autordetalle").classList.add("ocultar");
      document.getElementById("vista-autores").classList.remove("ocultar");	
      document.getElementById("vista-autores").classList.add("mostrar");
    };


    $scope.loginFacebook = function(){
         console.log("clicked");
         
         $ionicPlatform.ready(function() {
         
             $cordovaOauth.facebook("137259300073503", ["email"]).then(function(result) {
                alert("Auth Success..!!"+result);
                $state.go('tab.todos');
           
           }, function(error) {
             alert("Auth Failed..!!"+error);
             $state.go('login');
           });

        });

      };

    
});