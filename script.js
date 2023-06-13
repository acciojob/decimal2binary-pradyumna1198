function threeSum(num) {
	  // Check if the input is a non-negative integer
  if (Number.isInteger(num) && num >= 0) {
    // Special case for 0
    if (num === 0) {
      return '0';
    }

    // Perform the conversion
    let binary = '';
    while (num > 0) {
      binary = (num % 2) + binary;
      num = Math.floor(num / 2);
    }

    return binary;
  } 
}
