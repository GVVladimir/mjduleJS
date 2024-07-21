export function calculateFallDistance() {
  let timeFly = prompt("Введите время в секундах");
  let flyRow = (0.5 * 9.8 * `${timeFly}`) ^ 2;
  alert(`за  ${timeFly}  секунд обьект пролетит  ${flyRow}  метров`);
}
