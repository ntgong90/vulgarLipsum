//set up local memory array of output words
const vulgarWords = ['fuck you', 'bitch','cunt','motherfucker','shitstain','ogre','limpdick','gumby','paperhanded bitch','ass whipe', 'plonker'],
	censoredWords = ['f**k you', 'b**ch','cunt','motherf***er','sh**stain','ogre','limpd**k','gumby','paperhanded b**ch','a*s whipe', 'plonker'],
	outputWords = [];

//push to new output array randomly

function generateWords(numberOfWords){
	for(let i = 0; i < numberOfWords; i++){
		let randomIndex = Math.floor(Math.random()*vulgarWords.length);
		outputWords.push(vulgarWords[randomIndex]);
	}
	console.log(outputWords)
	return outputWords;
}
//for testing/debugging purposes
generateWords(20)

// function getInputWorldLengthSelection(){
// 	if(getInputWorldLengthSelection('select-200').checked)
// 		console.log('second button checked');
// 	else if (getInputWorldLengthSelection('select-500').checked)
// 		console.log('thrid button checked');	
// 	else if(getInputWorldLengthSelection('select-1500').checked)
// 		console.log('fourth button checked');
// 	else if (getInputWorldLengthSelection('select-500').checked)
// 		console.log('fifth button checked');	
// 	else
// 		console.log('no button checked')
// } 

//loops through radio buttons defualting to first radio button
if (document.querySelector('input[name="wordLength"]')) {
	document.querySelectorAll('input[name="wordLength"]').forEach((element) => {
	  element.addEventListener("change", function(event) {
		let item = event.target.value;
		console.log(item);
	  });
	});
  }




