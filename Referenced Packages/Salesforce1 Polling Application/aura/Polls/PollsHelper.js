({
    loadPolls : function(cmp) {
        // Load all polls data
        var action = cmp.get("c.getPolls");
        var self = this;
        action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
                cmp.set("v.polls", response.getReturnValue());
            }
        });
        $A.enqueueAction(action);
    }
})