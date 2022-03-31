const chat = document.querySelector(".chat");

// Сообщение бота
const botMessage = (value) => {
    if (value === '') {
        return
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
  divChat.scrollTop=9999;
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
  divChat.scrollTop=9999;
};
// Переменные для игры
let isPlaying = false
let randomInt = Math.floor(Math.random() * 101)

const divChat = document.querySelector(".chat");


// Комманды для бота
document.getElementById("add-message").onclick = (e) => { 
    e.preventDefault()
    const value = document.getElementById("form-for-message").value;
    document.getElementById("form-for-message").value = ''
    meMessage(value)

    console.log(value)
    
// Логика игры
    if (isPlaying === true) {
        if (value.toLowerCase() === '/stop') {
            botMessage('Игра остановлена')
            return isPlaying = false
        }
        else if (!isNaN(value)) {
            if (Number(value) > randomInt
            && Number(value) <= 100) {
                return botMessage('Введено большое число...')
            }

            else if (Number(value) < randomInt 
            && Number(value) >= 0 ) {
                return botMessage('Введено маленькое число...')
            }

            else if (Number(value) === randomInt ) {
                isPlaying = false
                randomInt = Math.floor(Math.random() * 101)
                return botMessage("Вы угадали!")
            }

            else {
                return botMessage('Введено не правильное число')
            }
        }
        else {
            return botMessage('Введено не правильное число')
        }
    }

// Комманды
    if (value.toLowerCase() === 'hello' 
    || value.toLowerCase() === 'привет') {
        return botMessage('Здорова')
    }

    else if (value.toLowerCase() === 'goodbye' 
    || value.toLowerCase() === 'by by'
    || value.toLowerCase() === 'bb' 
    || value.toLowerCase() === 'пока') {
        return botMessage('Bye bye')
    }
    
    else if (value.toLowerCase() === '/startgame') { // Игра
        isPlaying = true
        return botMessage('Введите число от 1 до 100. <br>Напишите /stop чтобы закончить')
    }

    else if (value.toLowerCase() === '') {
        return botMessage('Не надо так')
    }

    else if (value.toLowerCase() === '/vk') {
        botMessage('Загрузка...')
        return document.location.href = 'https://vk.com'
    }

    else if (value.toLowerCase() === '/yt') {
        botMessage('Загрузка...')
        return document.location.href = 'https://youtube.com'   
    }

    else if (value.toLowerCase() === 'хабиди ху') {
        return botMessage('Не дай бог')
    }

    else if (value.toLowerCase() === '/clear') {
        return document.location.reload()
    }

    else{
        return botMessage("Хм.... Что это?")
    }
};

// То что выводится в начале
botMessage(`Вот мои возможности:
<br>/startgame - игра, угадай цифру от 1 до 100
<br>/vk
<br>/yt
<br>/clear
`)