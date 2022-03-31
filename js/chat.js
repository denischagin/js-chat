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

const urlCommand = [
    {command: '/vk', url: 'https://vk.com'},
    {command: '/yt', url: 'https://youtube.com'},
    {command: '/gmail', url: 'https://gmail.com'},
    {command: '/gmail', url: 'https://gmail.com'},
    {command: '/gmail', url: 'https://gmail.com'},
    {command: '/gmail', url: 'https://gmail.com'},
    {command: '/gmail', url: 'https://gmail.com'},
    {command: '/gmail', url: 'https://gmail.com'},
    {command: '/gmail', url: 'https://gmail.com'},
    {command: '/gmail', url: 'https://gmail.com'},
    {command: '/gmail', url: 'https://gmail.com'},
    {command: '/gmail', url: 'https://gmail.com'},
    {command: '/gmail', url: 'https://gmail.com'},
    {command: '/gmail', url: 'https://gmail.com'},
    {command: '/gmail', url: 'https://gmail.com'},
    {command: '/gmail', url: 'https://gmail.com'},
    {command: '/gmail', url: 'https://gmail.com'},
    {command: '/gmail', url: 'https://gmail.com'},
    {command: '/gmail', url: 'https://gmail.com'},
    {command: '/gmail', url: 'https://gmail.com'},
    {command: '/gmail', url: 'https://gmail.com'},
    {command: '/gmail', url: 'https://gmail.com'},
    {command: '/gmail', url: 'https://gmail.com'},
    {command: '/gmail', url: 'https://gmail.com'},
    {command: '/gmail', url: 'https://gmail.com'},
    {command: '/gmail', url: 'https://gmail.com'},
    {command: '/gmail', url: 'https://gmail.com'},
    {command: '/gmail', url: 'https://gmail.com'},
    {command: '/gmail', url: 'https://gmail.com'},
    {command: '/gmail', url: 'https://gmail.com'},
    {command: '/gmail', url: 'https://gmail.com'},
    {command: '/gmail', url: 'https://gmail.com'},
    {command: '/gmail', url: 'https://gmail.com'},
    {command: '/gmail', url: 'https://gmail.com'},
    {command: '/gmail', url: 'https://gmail.com'},
    {command: '/gmail', url: 'https://gmail.com'},
    {command: '/gmail', url: 'https://gmail.com'},
    {command: '/gmail', url: 'https://gmail.com'},
    {command: '/gmail', url: 'https://gmail.com'},
    {command: '/gmail', url: 'https://gmail.com'},
    {command: '/gmail', url: 'https://gmail.com'},
    {command: '/gmail', url: 'https://gmail.com'},
    {command: '/gmail', url: 'https://gmail.com'},
    {command: '/gmail', url: 'https://gmail.com'},
    {command: '/gmail', url: 'https://gmail.com'},
    {command: '/gmail', url: 'https://gmail.com'},
    {command: '/gmail', url: 'https://gmail.com'},
    {command: '/gmail', url: 'https://gmail.com'},
    {command: '/gmail', url: 'https://gmail.com'},
    {command: '/gmail', url: 'https://gmail.com'},
    {command: '/gmail', url: 'https://gmail.com'},
    {command: '/gmail', url: 'https://gmail.com'},
    {command: '/gmail', url: 'https://gmail.com'},
]


// Комманды для бота
document.getElementById("add-message").onclick = (e) => { 
    e.preventDefault()
    const value = document.getElementById("form-for-message").value;
    document.getElementById("form-for-message").value = ''
    meMessage(value)

    console.log(value)

    urlCommand.forEach((command) => {
        if (value.toLowerCase() === command.command) {
            botMessage('Загрузка')
            return window.open(command.url)
        }
    })
    
// Логика игры
//     if (isPlaying === true) {
//         if (value.toLowerCase() === '/stop') {
//             botMessage('Игра остановлена')
//             return isPlaying = false
//         }
//         else if (!isNaN(value)) {
//             if (Number(value) > randomInt
//             && Number(value) <= 100) {
//                 return botMessage('Введено большое число...')
//             }

//             else if (Number(value) < randomInt 
//             && Number(value) >= 0 ) {
//                 return botMessage('Введено маленькое число...')
//             }

//             else if (Number(value) === randomInt ) {
//                 isPlaying = false
//                 randomInt = Math.floor(Math.random() * 101)
//                 return botMessage("Вы угадали!")
//             }

//             else {
//                 return botMessage('Введено не правильное число')
//             }
//         }
//         else {
//             return botMessage('Введено не правильное число')
//         }
//     }

// // Комманды
//     if (value.toLowerCase() === 'hello' 
//     || value.toLowerCase() === 'привет') {
//         return botMessage('Здорова')
//     }

//     else if (value.toLowerCase() === 'goodbye' 
//     || value.toLowerCase() === 'by by'
//     || value.toLowerCase() === 'bb' 
//     || value.toLowerCase() === 'пока') {
//         return botMessage('Bye bye')
//     }
    
//     else if (value.toLowerCase() === '/startgame') { // Игра
//         isPlaying = true
//         return botMessage('Введите число от 1 до 100. <br>Напишите /stop чтобы закончить')
//     }

//     else if (value.toLowerCase() === '') {
//         return botMessage('Не надо так')
//     }

//     else if (value.toLowerCase() === '/vk') {
//         botMessage('Загрузка...')
//         return window.open('https://vk.com') 
//     }

//     else if (value.toLowerCase() === '/yt') {
//         botMessage('Загрузка...')
//         return window.open('https://youtube.com') 
//     }

//     else if (value.toLowerCase() === 'хабиди ху') {
//         return botMessage('Не дай бог')
//     }

//     else if (value.toLowerCase() === '/github') {
//         botMessage('Загрузка')
//         return window.open('https://github.com')
//     }

//     else{
//         return botMessage("Хм.... Что это?")
//     }
};

// То что выводится в начале
botMessage(`Вот мои возможности:
<br>/startgame - игра, угадай цифру от 1 до 100
<br>/vk
<br>/yt
<br>/github
`)

const sideBar = document.getElementById("mySidenav")
const menu = document.querySelector('.menu')
const clearBtn = document.getElementById('clear-btn')
const settingsBtn = document.getElementById('settings-btn')
let isAppeared = true

const click = (e) => {
    if (isAppeared === false){
        sideBar.style.width = "230px";
        e.preventDefault()
        isAppeared = true
    }
    else if (isAppeared === true) {
        sideBar.style.width = "0";
        e.preventDefault()
        isAppeared = false
    }
}

sideBar.children['0'].addEventListener('click', click)
menu.children['1'].addEventListener('click', click )
console.log(menu)

clearBtn.addEventListener('click', () => {
    document.location.reload()
})
settingsBtn.addEventListener('click', () => {
    document.querySelector('.settings-unvisible').classList.add('settings-visible')
    document.querySelector('.settings-unvisible').insertAdjacentHTML(
        'beforeend',
        `
            <strong>Доступные комманды</strong>
        `
    )
    urlCommand.forEach((command) => {
        document.querySelector('.settings-unvisible').insertAdjacentHTML(
            "beforeEnd",
            `
                <p>${command.command} - ${command.url}</p>
            `     
          );
    })
    document.querySelector('.settings-unvisible').insertAdjacentHTML(
        'beforeend',
        `
        <form>
            <input placeholder = 'Введите новую комманду' style='width: 200px'></ input>
            <input placeholder = 'Введите url для комманды' style='width: 200px'></ input>
            <button>Добавить</button>
        </form>
        `
        )

})
