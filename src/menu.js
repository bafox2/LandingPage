//maybe make cards based off an object 
//maybe add those objects to an array and create the items automatically

let clear = () => {
    const myNode = document.querySelector('#content')
    while (myNode.firstChild) {
        myNode.removeChild(myNode.lastChild);
    }
}