const chat = document.querySelector(".chat");

// Сообщение бота
const botMessage = (value) => {
  if (value === "") {
    return;
  }
  divChat.insertAdjacentHTML(
    "beforeEnd",
    `
	<div class="message">
		<h1>Bot</h1>
		<p>${value}</p>
	</div>
	`
  );
  divChat.scrollTop = 9999;
};

// Сообщение пользователя
const meMessage = (value) => {
  divChat.insertAdjacentHTML(
    "beforeEnd",
    `
	<div class="message">
		<h1>Me</h1>
		<p>${value}</p>
	</div>
`
  );
  divChat.scrollTop = 9999;
};
// Переменные для игры
let isPlaying = false;
let randomInt = Math.floor(Math.random() * 101);

const divChat = document.querySelector(".chat");

// Основные комманды бота
const urlCommand = [
  { command: "/vk", url: "https://vk.com" },
  { command: "/yt", url: "https://youtube.com" },
];

document.getElementById("add-message").onclick = (e) => {
  e.preventDefault();
  const value = document.getElementById("form-for-message").value;
  document.getElementById("form-for-message").value = "";
  meMessage(value);

  urlCommand.forEach((command) => {
    if (value.toLowerCase() === command.command) {
      botMessage("Загрузка");
      return window.open(command.url);
    }
  });

  // Логика игры
  if (isPlaying === true) {
    if (value.toLowerCase() === "/stop") {
      botMessage("Игра остановлена");
      return (isPlaying = false);
    } else if (!isNaN(value)) {
      if (Number(value) > randomInt && Number(value) <= 100) {
        return botMessage("Введено большое число...");
      } else if (Number(value) < randomInt && Number(value) >= 0) {
        return botMessage("Введено маленькое число...");
      } else if (Number(value) === randomInt) {
        isPlaying = false;
        randomInt = Math.floor(Math.random() * 101);
        return botMessage("Вы угадали!");
      } else {
        return botMessage("Введено не правильное число");
      }
    } else {
      return botMessage("Введено не правильное число");
    }
  }

  // Game
  if (value.toLowerCase() === "/startgame") {
    isPlaying = true;
    return botMessage(
      "Введите число от 1 до 100. <br>Напишите /stop чтобы закончить"
    );
  } 
};

// То что выводится в начале
botMessage(`
	Вот мои возможности:
	<br>/startgame
	${urlCommand.map((command) => {
    return `<br>${command.command} - ${command.url}`;
  })}`);

const sideBar = document.getElementById("mySidenav");
const menu = document.querySelector(".menu");
const clearBtn = document.getElementById("clear-btn");
const settingsBtn = document.getElementById("settings-btn");
let isAppeared = true;

const click = (e) => {
  if (isAppeared === false) {
    sideBar.style.width = "230px";
    e.preventDefault();
    isAppeared = true;
  } else if (isAppeared === true) {
    sideBar.style.width = "0";
    e.preventDefault();
    isAppeared = false;
  }
};
// Боковое меню
sideBar.children["0"].addEventListener("click", click);
menu.children["1"].addEventListener("click", click);

// Кнопка очистить на боковом меню
clearBtn.addEventListener("click", () => {
  document.location.reload();
});

// Рендер окна settings
settingsBtn.addEventListener("click", () => {
  document
    .querySelector(".settings-unvisible")
    .classList.add("settings-visible");
  document.querySelector(".commands").innerHTML = `
			<strong>Доступные команды</strong>
		`;

  urlCommand.forEach((command) => {
    document.querySelector(".commands").insertAdjacentHTML(
      "beforeEnd",
      `
				<p>${command.command} - ${command.url}</p>
			`
    );
  });
  document.querySelector(".settings-unvisible").insertAdjacentHTML(
    "beforeend",
    `
		<form id='form-for-commands'>
			<input id = 'input-for-command' placeholder = 'Введите новую комманду' ></ input>
			<input id = 'input-for-url' placeholder = 'Введите url для комманды' value='https://'></ input>
			<button> Добавить</button>
		</form>
		`
  );

  // Добавляем событие на кнопку добавить
  document
    .getElementById("form-for-commands")
    .children["2"].addEventListener("click", (e) => {
      e.preventDefault();
      const command = document.getElementById("input-for-command");
      const url = document.getElementById("input-for-url");

      // Заполняем массив
      console.log(command.value);
      if (command.value) {
        urlCommand.push({ command: command.value, url: url.value });
        document.querySelector(".commands").insertAdjacentHTML(
          "beforeEnd",
          `
					<p>${command.value} - ${url.value}</p>
				`
        );
        botMessage(`
				Вот мои возможности:
				<br>/startgame
				${urlCommand.map((command) => {
          return `<br>${command.command} - ${command.url}`;
        })}`);
      }
      // Скрываем окно настроек
      document
        .querySelector(".settings-unvisible")
        .classList.remove("settings-visible");
	 document.getElementById('form-for-commands').remove()
	  
    });
});
