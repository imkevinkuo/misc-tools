function validateForm() {
	var valid = true;
	var radioGroups = document.querySelectorAll("crowd-radio-group");
	for (var i = 0; i < radioGroups.length; i++) {
		var validGroup = false;
		var radioButtons = radioGroups[i].children;
		for (var j = 0; j < radioButtons.length; j++) {
			validGroup = validGroup || radioButtons[j].checked;
		}
		valid = valid && validGroup;
	}
	return valid;
}

window.onload = function() {
	document.querySelector('crowd-form').onsubmit = function(e) {
		if (!validateForm()) {
			alert("Please answer all the questions in order to submit.");
			e.preventDefault();
		}
	}
}