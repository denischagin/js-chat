const chat = document.querySelector(".chat");

// Сообщение бота
const botMessage = (value) => {
  if (chat.children.length === 8) {
    chat.children["0"].remove();
  }
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
};

// Сообщение пользователя
const meMessage = (value) => {
  if (chat.children.length === 8) {
    chat.children["0"].remove();
  }
  divChat.insertAdjacentHTML(
    "beforeEnd",
    `
    <div class="message">
        <h1>Me</h1>
        <p>${value}</p>
    </div>
`
  );
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
    
// Логика игры
    if (isPlaying === true) {
        if (!isNaN(value)) {
            if (Number(value) > randomInt) {
                return botMessage('Введено большое число...')
            }

            else if (Number(value) < randomInt) {
                return botMessage('Введено маленькое число...')
            }

            else if (Number(value) === randomInt) {
                isPlaying = false
                randomInt = Math.floor(Math.random() * 101)
                return botMessage("Вы угадали!")
            }

            else {
                return botMessage('Что то явно не так')
            }
        }
        else {
            return botMessage('Введено не число')
        }
    }


// Комманды
    if (value.toLowerCase() === 'hello' 
    || value.toLowerCase() === 'привет') {
        return botMessage('Привет ботяра')
    }

    else if (value.toLowerCase() === 'goodbye' 
    || value.toLowerCase() === 'by by'
    || value.toLowerCase() === 'bb' 
    || value.toLowerCase() === 'пока') {
        return botMessage('ББ удачи')
    }
    

    else if (value.toLowerCase() === '/startgame') { // Игра
        isPlaying = true
        return botMessage('Введите число от 1 до 100')
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