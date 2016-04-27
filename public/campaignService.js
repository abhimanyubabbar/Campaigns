(function(){
  
  angular.module('campaigns').service('CampaignService', ['$log', CampaignService]);

  function CampaignService($log){
    $log.debug('campaign service instantiated');
    var campaignArray = [];

    return {
      addNewCampaign : addNewCampaign,
      retrieveCampaigns : retrieveCampaigns
    };

    function addNewCampaign(campaign){
      $log.debug('invoked call to add a new campaign');
      campaignArray.push(campaign);
    }

    function retrieveCampaigns(){
      $log.debug('invoked call to retrieve campaigns');
      return campaignArray;
    }
  }

})();
