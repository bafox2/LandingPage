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


export { init, clear }