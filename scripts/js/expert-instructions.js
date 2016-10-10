var showInstructions = function(expert_first_name, live_date, live_date_string, live_time_string, expert_pronoun) {
	var live = new Date(live_date);
	var today = new Date();
	var dateString = (live.setHours(0,0,0,0) == today.setHours(0,0,0,0) ? 'today' : ('on ' +live_date_string));
	$("#instructions").html(expert_first_name +' will be answering questions from ' +
		live_time_string + ' ' + dateString +'. Send your questions to '+expert_pronoun+' using the box below and tune in for the real-time discussion.');
};
