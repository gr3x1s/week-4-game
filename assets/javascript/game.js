$(document).ready(function() {

	crystals = ['assets/images/red.png','assets/images/blue.png','assets/images/yellow.png','assets/images/green.png'];

	var counter = 0;
	var wins = 0;
	var losses = 0;
	$('#win').text(wins);
	$('#loss').text(losses);
	
	genCrystal();
	newGame();



	function genCrystal () {
		var number = []
			while(number.length < 4){
			  var randomnumber = Math.ceil(Math.random()*12)
			  var select = false;
			  for (var i=0; i< number.length; i++){
				if (number[i] == randomnumber){
					select = true; break
				}
			  }
			  if(!select)number[number.length]=randomnumber;
			}	

		for (i = 0; i < number.length; i++) {
			var crystalImage = $('<img>');
			crystalImage.attr('data-num', number[i]);
			crystalImage.attr('src', crystals[i]);
			crystalImage.attr('alt', 'crystals');
			crystalImage.addClass('crystalImage')
			$('#crystals').append(crystalImage);
		}
	}

	function newGame() {

		counter = 0;
		$('#yourScore').text(counter);

		function randFromInt(min,max){
		   	return Math.floor(Math.random()*(max-min+1)+min);
			}

		var numberToGuess = randFromInt(19,120);

		$('.value').text(numberToGuess);


		$('.crystalImage').on('click', function(){
		    counter = counter + parseInt($(this).data('num'));
		   
		    $('#yourScore').text(counter);

		    if (counter == numberToGuess){
		      $('#box').text('Winner!');
		      wins ++;
		      $('#win').text(wins);
		      $('#crystals').empty();
		      genCrystal();
		      newGame();
		        
		    } else if ( counter > numberToGuess){
		        $('#box').text('Loser!')
		        losses ++;
		        $('#loss').text(losses);
		        $('#crystals').empty();
		        genCrystal();
		        newGame();
		    }
		});
	}

});