({
	doInit : function(component, event, helper) {
		helper.loadOptions(component);
	},
	optionClick : function(component, event, helper) {
        var target;
        if(event.getSource){
            target = event.getSource();
            var selOption = target.get('v.label');
            helper.saveResponse(component, selOption);
        }
	}
})