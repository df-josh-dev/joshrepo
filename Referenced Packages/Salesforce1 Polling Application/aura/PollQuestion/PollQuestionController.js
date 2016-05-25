({
    showOptions : function(component, event, helper) {        
        $A.createComponent (
            "sfsiPoll:PollOptions",
            {    
                "poll": component.get("v.pollQuestion")
            },
			function(content){
                component.set("v.optionsContainer", content);
            }            
        );
    }
})