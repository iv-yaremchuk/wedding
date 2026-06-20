const deadline = new Date("2026-08-15T11:29:59").getTime();

function updateTimer() {
  const now = new Date().getTime();
  const diff = deadline - now;

  // Если таймер завершился
  if (diff <= 0) {
    clearInterval(timerId);
    document.querySelector(".timer").innerHTML = "<h3>Началось!</h3>";
    return;
  }

  // 2. Расчет дней, часов, минут и секунд
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  // 3. Вывод на страницу (с добавлением ведущего нуля, если цифра меньше 10)
  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
  document.getElementById("minutes").innerText =
    minutes < 10 ? "0" + minutes : minutes;
  document.getElementById("seconds").innerText =
    seconds < 10 ? "0" + seconds : seconds;
}

// 4. Запуск функции каждую секунду и сразу при загрузке
const timerId = setInterval(updateTimer, 1000);
updateTimer();
