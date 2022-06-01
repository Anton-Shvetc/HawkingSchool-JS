async function playLottery() {
  console.log("Игра началась ...");

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(getRandomInt(0, 2)), 3000);
  });

  
  let result = await promise;
  console.log('Ожидание результата...')
  result === 1 ? console.log("Вы проиграли") : console.log("Победа!!!");
}

playLottery();

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
