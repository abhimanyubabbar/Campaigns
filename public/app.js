(function(){

  /**
    The main application module.
   **/
  var app = angular.module('campaign', []);

  app.config(['$logProvider', function($logProvider){
    $logProvider.debugEnabled(true);
  }]);

})();
