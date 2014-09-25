Template.MOARslides.events({
	'submit form': function(e) {
		e.preventDefault();

		var surveySubmission = {
			yn: $(e.target).find('input[name=yn]:checked').val()
		}

		console.log(surveySubmission);

	}
});