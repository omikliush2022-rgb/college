console.log("Лабораторна робота №11");
console.log("======================");

let n = parseInt(prompt("Введіть n (розмір ромба):"));
let result = "";

for (let i = 1; i <= n; i++) {
  result += " ".repeat(n - i) + i.toString().repeat(2 * i - 1) + "\n";
}

for (let i = n - 1; i >= 1; i--) {
  result += " ".repeat(n - i) + i.toString().repeat(2 * i - 1) + "\n";
}

console.log("Завдання 1: Ромб");
console.log(result);

let m = parseInt(prompt("Введіть n для числового ряду:"));
let sum = 0;
let series = "";

for (let i = 1; i <= m; i++) {
  sum += i;
  series += i + (i < m ? " + " : "");
}

console.log("Завдання 2: Числовий ряд");
console.log(series);
console.log("Сума =", sum);

let secret = Math.floor(Math.random() * 20) + 1;
let userNumber;

console.log("Завдання 3: Гра");

do {
  userNumber = parseInt(prompt("Вгадайте число від 1 до 20:"));

  if (userNumber > secret) {
    alert("Менше");
  } else if (userNumber < secret) {
    alert("Більше");
  } else {
    alert("🎉 Ви вгадали число!");
  }
} while (userNumber !== secret);

console.log("Гру завершено");
