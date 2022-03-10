import getMenu from './menu.js';
import aboutContent from './about.js';
import mapContent from './contact.js';



let clear = () => {
    const myNode = document.querySelector('#content')
    while (myNode.firstChild) {
        myNode.removeChild(myNode.lastChild);
    }
}

let init = () => {
    content = document.createElement('div')
    content.setAttribute('id', 'content')
    document.querySelector('body').appendChild(content)
}

//document.querySelector('#content').appendChild(document.createElement)
//document.body.append(Object.assign(document.createElement('div'),{textContent:"fd"}));

let buttonAssignment = () => {
    let aboutbtn = document.querySelector('#about')
    let menubtn = document.querySelector('#menu')
    let contactbtn = document.querySelector('#contact')
    aboutbtn.addEventListener('click', () => {
        console.log('working')
        clear()
        aboutContent()
    })
    menubtn.addEventListener('click', () => {
        console.log('working')
        clear()
        getMenu()
    })
    contactbtn.addEventListener('click', () => {
        console.log('working')
        clear()
        mapContent()
    })

}

export { init, clear, buttonAssignment }