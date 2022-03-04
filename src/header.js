let header = () => {
    let header = document.createElement('div')
    header.classList.add("header");
    let navbar = document.createElement('nav')
    let title = document.createElement('h1')
    title.innerText = "Fox's Den"
    navbar.classList.add('navbar')
    let about = document.createElement('button')
    about.innerText = "About"
    about.setAttribute('id', 'about')
    let menu = document.createElement('button')
    menu.innerText = "Menu"
    about.setAttribute('id', 'menu')
    let contact = document.createElement('button')
    contact.innerText = "Contact"
    about.setAttribute('id', 'contact')

    header.append(title, navbar)
    navbar.append(about, menu, contact)
    document.querySelector('body').appendChild(header)
};

export default header;

//could make a function to generate these little DOM elements in a less messy way