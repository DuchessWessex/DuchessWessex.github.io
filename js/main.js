function askQuestions () { 

	var firstName = prompt('What is your first name?');
	var lastName = prompt('What is your last name?');

	var fullName = firstName + ' '+ lastName;

	$('h2').text('Hello '+fullName);

	var age = prompt('How old are you?');
	age = parseInt(age);

	if (age >= 18) {
		console.log('Welcome, adult!')
	} else if (age >= 13) {
		console.log('Come back in a few years.');
	} else {
		console.log('Go away child!');
	} 

	if (firstName.toLowerCase() === 'general' && lastName.toLowerCase() !== 'assembly') {
		console.log('Attention General!');
	}

	var faveColor = prompt('What is your favourite colour?').toLowerCase();

	if (faveColor == 'red' || 
		faveColor == 'green' || 
		faveColor == 'blue' ||
		faveColor == 'yellow') {
		$('h1').css('color', faveColor);
	}

}

//When the page has loaded

$(function() {

	$('img').on('click', askQuestions);

	//Hide all the content
	$('H3').next().hide();

	//when the user clicks an H3
	$('H3').on('click', function() {
		
		//Toggle the next element
		$(this).next().slideToggle(1000);

	});

});
