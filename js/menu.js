const sideBar = document.getElementById("mySidenav")
const menu = document.querySelector('.menu')
const clearBtn = document.getElementById('clear-btn')
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

clearBtn.addEventListener('click', () => {
    document.location.reload()
})
