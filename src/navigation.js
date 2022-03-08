import contact from './contact.js';
import about from './about.js';
import { getMenu } from './menu.js'


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

}

export { init, clear }