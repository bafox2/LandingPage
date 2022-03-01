let contact = (() => {
    let contactdiv = document.createElement('div')
    contactdiv.classList.add("contact");
    let phone = document.createElement('p')
    phone.innerText = "703-555-5555"
    let address = document.createElement('p')
    address.innerText = "408 W St Clair Ave, Cleveland, OH 44113"
    contactdiv.appendChild(phone)
    contactdiv.appendChild(address)
    document.querySelector('#content').appendChild(footer)
})();
export default footer;