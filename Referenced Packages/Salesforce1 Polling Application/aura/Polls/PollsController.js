({
	doInit : function(component, event, helper) {
		helper.loadPolls(component);
	},
    navHome : function (component, event, helper) {
        var homeEvent = $A.get("e.force:createRecord");
        homeEvent.setParams({
            "entityApiName": "sfsiPoll__Poll_Question__c"
        });
        homeEvent.fire();
    },    
    showSpinner : function (component, event, helper) {
        var spinner = component.find('spinner');
        var evt = spinner.get("e.toggle");
        evt.setParams({ isVisible : true });
        evt.fire();    
    },
    
    hideSpinner : function (component, event, helper) {
       var spinner = component.find('spinner');
       var evt = spinner.get("e.toggle");
       evt.setParams({ isVisible : false });
       evt.fire();    
    }
})