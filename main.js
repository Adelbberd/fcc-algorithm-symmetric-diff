function sym(...args) {
	// The symmetric difference of two or more sets(array).
	let symDiffArray = args.reduce((arr1, arr2) => {
		let uniqueElems = [];

		for (let i = 0; i < arr1.length; i++) {
			if (!arr2.includes(arr1[i]) && !uniqueElems.includes(arr1[i])) {
				uniqueElems.push(arr1[i]);
			}
		} // End of first for loop.

		for (let i = 0; i < arr2.length; i++) {
			if (!arr1.includes(arr2[i]) && !uniqueElems.includes(arr2[i])) {
				uniqueElems.push(arr2[i]);
			}
		} // End of 2nd for loop

		return uniqueElems; // now arr1
	});

	return symDiffArray;
}

sym([1, 2, 5], [2, 3, 5], [3, 4, 5]);
