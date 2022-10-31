// 1. Написать функцию возведения числа в степень.

function degrees(x, n = 0) {
	if (n == 0) return 1;
	else {
		while (n > 0) {
			return x * degrees(x, n - 1);
		}
	}
}
console.log("Задание №1 : " + degrees(3, 3));

// 2. Написать функцию поиска наибольшего общего делителя.

function divider(m, m1) {
	if (m1 > m) return divider(m1, m);
	if (!m1) return m;
	return divider(m1, m % m1);
}
console.log("Задание №2 : " + divider(10, 25));

// 3. Написать функцию для поиска максимальной цифры в числе.

m = 0;
function maxNumber(a) {
	if (a % 10 > m) { m = a % 10 };
	if (a > 10) { maxNumber(parseInt(a / 10)) }
	return m;
}
console.log("Задание №3 : " + maxNumber(68952));

// 4. Написать функцию, которая определяет простое ли переданное число.

function primeNumber(v) {
	if (v == 2) return `${v} - 3то число не простое`;
	if (v % 2 == 0) return `${v} - это число не простое`;
	if (v == 1) return `${v} - это число не простое`;
	if (v > 1) return `${v} - это число простое`;
	return primeNumber(v);
}
console.log("Задание №4 : " + primeNumber(128));

// 5. Написать функцию для вывода всех множителей переданного числа в возрастающем порядке.
// Например: число 18 – множители 2 * 3 * 3.

function multiplier(a, arr = [], b = 2) {
	if (b > Math.sqrt(a)) {
		arr.push(a);
		return arr;
	} else if (a % b == 0) {
		arr.push(b);
		multiplier(a / b, arr, b);
	} else {
		multiplier(a, arr, ++b);
	}
	return arr.join("*");
}
console.log("Задание №5 : " + multiplier(18));

// 6. Написать функцию, которая возвращает число Фибоначчи по переданному порядковому номеру.
// Числа Фибоначчи: 1, 1, 2, 3, 5, 8, 13… Ряд основывается на том, что каждое число равно сумме двух предыдущих чисел.
// Например: порядковый номер 3 – число 2, порядковый номер 6 – число 8.

function fibonach(n) {
	if (n <= 1) return n;
	else {
		return fibonach(n - 1) + fibonach(n - 2);
	}
}
console.log("Задание №6 : " + fibonach(7));