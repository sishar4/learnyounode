var numbers = process.argv.slice(2);

function reduce (anArray, startingVal, reducerFunction) {
	var currentVal = startingVal;
	for (var i = 0; i < anArray.length; i++) {
		currentVal = reducerFunction(currentVal, Number(anArray[i]));
	}

	return currentVal;
}

function sum (arr) {
	var total = reduce(arr, 0, function (current, next) {
		return current + next;
	});

	return total;
}

var total = sum(numbers);
console.log(total);