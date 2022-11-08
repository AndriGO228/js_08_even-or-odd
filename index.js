function evenOrOdd(n) {
	return n < 0 ? 'NEGATIVE' : n === 0 ? 'ZERO' : n % 2 === 1 ? 'ODD' : 'EVEN';
}

module.exports = evenOrOdd;