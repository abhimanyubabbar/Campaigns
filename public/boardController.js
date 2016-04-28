(function(){

  angular.module('campaign').controller('BoardController', ['$log','CampaignService', BoardController]);

  /**
    Controller for the board over which the
    campaign list needs to be displayed.
   **/
  function BoardController($log, CampaignService){

    $log.debug('board controller instantiated');
    var self = this;

    function setup(self){
      self.campaigns = [];
      self.newCampaign = {};
      // fetch all the campaigns.
      self.campaigns = CampaignService.retrieveCampaigns();
    }

    self.addNewCampaign = function(){
      $log.debug('invoked addition of a new campaign');
      // TODO: Do a validation check here.
      CampaignService.addNewCampaign();
    };
    setup(self);
  }

})();
