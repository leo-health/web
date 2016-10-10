var showInstructions = function(expert_first_name, live_date, live_date_string, live_time_string, expert_pronoun) {
	var live = new Date(live_date);
	var today = new Date();

	if(live.setHours(0,0,0,0) == today.setHours(0,0,0,0)) {
		$("#instructions").html(expert_first_name +' will be answering questions today. Send your questions to '+ expert_pronoun +' using the box below and tune in for the real-time discussion.');
	}else{
		$("#instructions").html(expert_first_name +' will be answering questions from ' + live_time_string +' on '+live_date_string+'. Send your questions to '+expert_pronoun+' using the box below and tune in for the real-time discussion.');
	}
};
