({
	loadOptions : function(cmp) {
        // Load all polls data
        var action = cmp.get("c.getOptions");
        action.setParams({ question : cmp.get("v.poll") });
        
        var self = this;
        action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
                cmp.set("v.options", response.getReturnValue());
            }
        });
        $A.enqueueAction(action);		
	},
    saveResponse : function(cmp, selOption){
        var action = cmp.get("c.saveResponse");
        action.setParams({ question : cmp.get("v.poll"), optionName : selOption});
        
        action.setCallback(this, function(response){
            var state = response.getState();
            
            if (state === "SUCCESS") {
                cmp.set("v.options", response.getReturnValue());
                cmp.set("v.hasResponded", true);
            } else {
                cmp.set("v.errorMsg", "Oh Snap! There was an error in saving your response. Please contact your system administrator.");
            }
        });
        $A.enqueueAction(action);		
    }
})