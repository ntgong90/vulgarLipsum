
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
	document.querySelector('#testOutput').innerText = outputWords;
	return outputWords;
}
//for testing/debugging purposes
generateWords(Math.floor(Math.random()*50) + 1)

//loops through radio buttons defualting to first radio button
if (document.querySelector('input[name="wordLength"]')) {
	document.querySelectorAll('input[name="wordLength"]').forEach((element) => {
	  element.addEventListener("change", function(event) {
		let item = event.target.value;
	  });
	});
  }

//TRASH CODE KEK
if(document.querySelector('input[name="wordLength"]') === 'select-50'){
	numberOfOutputWords = Math.floor(Math.random()*50) + 1;
	document.querySelector('#testText').innerText = numberOfOutputWords;
  } 
if(document.querySelector('input[name="wordLength"]') == 'select-200'){
	numberOfOutputWords = Math.floor(Math.random()*200) + 1;
	document.querySelector('#testText').innerText = generateWords(numberOfOutputWords);
}
if(document.querySelector('input[name="wordLength"]') == 'select-500'){
	numberOfOutputWords = Math.floor(Math.random()*500) + 1;
	document.querySelector('#testText').innerText = generateWords(numberOfOutputWords);
}
if(document.querySelector('input[name="wordLength"]') == 'select-1500'){
	numberOfOutputWords = Math.floor(Math.random()*1500) + 1;
	document.querySelector('#testText').innerText = generateWords(numberOfOutputWords);
}
//max set at 3000 words currently
if(document.querySelector('input[name="wordLength"]') == 'select-plus'){
	numberOfOutputWords = Math.floor(Math.random()*3000) + 1;
	document.querySelector('#testText').innerText = generateWords(numberOfOutputWords);
}




