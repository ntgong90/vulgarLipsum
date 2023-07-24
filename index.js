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

generateWords(20)

//shuffler using Durstenfeld shuffle
// function shuffleWords(words){
// 	for(let i = words.length - 1; i > 0; i--){
// 		const j = Math.floor(Math.random()*(i +1));
// 		[words[i], words[j]] = [words[j], words[i]];
// 	}
// 	console.log(words)
// 	return words;
// }

//shuffleWords(vulgarWords)

