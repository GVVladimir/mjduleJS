export function calculateAverage() {
  let num1 = +prompt("Введите первое число");
  console.log(num1);
  let num2 = +prompt("Введите второе число");
  console.log(num2);
  let num3 = +prompt("Введите третье число");
  console.log(num3);
  let averageNum = (+num1 + +num2 + +num3) / 3;
  console.log(averageNum);
  alert(averageNum);
}
