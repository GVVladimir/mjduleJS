export let celv = 273.15;

export function celsiusToFahrenheit() {
  let cels = Number(prompt("Введите градусы цельсия"));
  let sum = cels + celv;
  alert(`в кельвина это: ${sum}`);
}
