let Sonnernotifications = [
    'Sonner Alive is here',
    'Sonner Giftee is alive',
    'Sonner It is all good in the end',
    'Sonner No reason for regrets',
    'Sonner I am on my way to save you',
    'Sonner No  regrets all ways',
    'Sonner No reason for regrets even more of me',
    'Sonner No reason for regrets',
]

let hotNotifications = [
    'HOT Alive is here',
    'HOT Giftee is alive',
    'HOT It is all good in the end',
    'HOT No reason for regrets',
    'HOT I am on my way to save you i love',
    'HOT Giftee is alive',
    'HOT It is all good in the end',
]

let sonnerBtn = document.querySelector('.sonner')
const sound = new Audio('pop-up-off.mp3')
const hotS = new Audio('pop-down.mp3')
let hot = document.querySelector('.hot')

hot.addEventListener('click', () => {
    let count = 0;
    let top = 0
    
    setTimeout(() => {
        hotS.play()
    },500)
    setTimeout(() => {
        hotS.play()
    },1000)

    let interval = setInterval(() => {
        let div = document.createElement('div')
    

            div.classList.add('bot2')
        setTimeout(() => {
            div.classList.add('bot3')
            setTimeout(() => {
                div.classList.add('bot4')
              

            }, 1000)

        }, 700)
        div.innerText = hotNotifications[count]

        let parent = document.querySelector('.dynoParent')
        parent.append(div)
        let children = parent.children
        if (children.length > 3) {
            let firstChild = parent.firstElementChild
            parent.removeChild(firstChild)
        }



        count++
        top -= 3
        
        if (count == hotNotifications.length) {
            clearInterval(interval)
        }
    }, 1000)

})


sonnerBtn.addEventListener('click', () => {
    let count = 0;
    let top = 0
    
    setTimeout(() => {
        sound.play()
    },500)
    setTimeout(() => {
        sound.play()
    },1000)

    let interval = setInterval(() => {
        let div = document.createElement('div')
    

            div.classList.add('bot2')
        setTimeout(() => {
            div.classList.add('bot3')
            setTimeout(() => {
                div.classList.add('bot4')
              

            }, 1000)

        }, 700)
        div.innerText = Sonnernotifications[count]

        let parent = document.querySelector('.dynoParent')
        parent.append(div)
        let children = parent.children
        if (children.length > 3) {
            let firstChild = parent.firstElementChild
            parent.removeChild(firstChild)
        }



        count++
        top -= 3

        if (count == Sonnernotifications.length) {
            clearInterval(interval)
        }
    }, 1000)

})




