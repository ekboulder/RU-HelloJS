<!-- Exercise JS1-->

// var name = prompt('Hello! What is your name')

// alert('Hello ' + name + '!'); 


<!-- Exercise Loop Practice-->

// // 0 1 2 3 4 
// for ( var i= 0; i < 5; i++ )
// {
// 	console.log(i);
// }

// // initialize
// var iprint = 1;

// // 0 100 200 300 400 500
// for ( var i= 0; i < 6; i++ ) {
// 	iprint = i * 100;
// 	console.log(iprint);
// }
// // 1 2 4 8 16 32 64

// for ( var i = 1; i < 8 ; i++ )
// {
// 	if ( i === 1) {
// 		iprint = 1
// 	} else {
// 		iprint = iprint * 2;
// 	}
// 	console.log(iprint);
// }

// 1 1 1 2 2 2 3 3 3 
// for ( var i= 1; i < 4 ; i++ )
// {
// 		for (var j = 0; j <3 ; j++)
// 			console.log(i);
// }

// // 0 2 4 6 8 10

// for ( var i = 0; i <= 10 ; i++ )
// {
// 	iprint = i; 

// 	if (( i === 0) || ( i%2==0 )) {
// 		console.log(iprint);
// 	}
// }

// // 3 6 9 12 15

// for ( var i = 1; i < 6 ; i++ )
// {
// 	if ( i === 1) {
// 		iprint = 3
// 	} else {
// 		iprint = iprint + 3;
// 	}
// 	console.log(iprint);
// }

// // 9 8 7 6 5 4 3 2 1 0 

// for ( var i = 9; i >=0 ; i-- )
// {
// 	console.log(i);
// }

// 0 1 2 3 0 1 2 3 0 1 2 3
// for ( var i= 0; i < 3 ; i++ )
// {
// 		for (var j = 0; j < 4 ; j++) {
// 			console.log(j);
// 		}

// }

<!-- Exercise js2 String Reporter -->

var entry = prompt ('Please enter a word of your choice:')

alert('you entered the word: ' + entry )
alert('your word is made out of ' + entry.length + ' characters' )
alert('the 3rd character in your word is ' + entry.charAt(2))
alert('here is your word in all lower case: ' + entry.toLowerCase() )
alert('here is your word in all UPPER CASE: ' + entry.toUpperCase() )

alert('here are the 2nd, 3rd and 4th Characters of your word: ' + entry.substring(1,4))
