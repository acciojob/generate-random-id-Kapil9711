function makeid(l) {
  // write your code here

	const letter = ['a','B','c','d','e','f','g','h','i','j','k','l','m','N','O',1,2,3,4,5,6,7,8,9];
	let newStr = ''
	for(let i = 1; i <=Number(l) ; i++){
		newStr += letter[Math.floor(Math.random() * 20)];			
}
	return newStr;
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
