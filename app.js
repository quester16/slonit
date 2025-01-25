function guessNumber() {
  const com1 = Math.floor(Math.random() * 100) + 1;
  let left = 1; // Левая граница диапазона
  let right = 100; // Правая граница диапазона

  console.log(`Компьютер 1 загадал число: ${com1}\n`);

  while (true) {
    const com2 = Math.floor((left + right) / 2); // середину диапазона
    console.log(`Компьютер 2: Пробую число ${com2}.`);

    if (com2 === com1) {
      console.log("Компьютер 2: Угадал!");
      break; // Выходим из цикла, если угадали
    } else if (com2 > com1) {
      console.log("Компьютер 1: Меньше.");
      right = com2 - 1;
    } else {
      console.log("Компьютер 1: Больше.");
      left = com2 + 1;
    }
  }
}
guessNumber();
