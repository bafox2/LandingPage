let header = (() => {
    let header = document.createElement('div')
    header.classList.add("header");
    let navbar = document.createElement('nav')
    let title = document.createElement('h1')
    title.innerText = "Fox's Den"
    navbar.classList.add('navbar')
    let about = document.createElement('button')
    about.innerText = "About"
    let menu = document.createElement('button')
    menu.innerText = "Menu"
    let contact = document.createElement('button')
    contact.innerText = "Contact"

    header.appendChild(title)
    header.appendChild(navbar)
    navbar.appendChild(about)
    navbar.appendChild(menu)
    navbar.appendChild(contact)
    document.querySelector('body').appendChild(header)
})();

export default header;