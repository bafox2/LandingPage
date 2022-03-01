import { Loader, LoaderOptions } from 'google-maps';



let contact = (() => {
    let contactdiv = document.createElement('div')
    contactdiv.classList.add("contact");
    let phone = document.createElement('p')
    phone.innerText = "703-555-5555"
    let address = document.createElement('p')
    address.innerText = "408 W St Clair Ave, Cleveland, OH 44113"
    let mapwrapper = document.createElement('#map')
    const options: LoaderOptions = { /* todo */ };
    const loader = new Loader('AIzaSyCO_zgzQPLw8QumirmZWjHwgRDFrdIMooM', options);

    const google = await loader.load();
    const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
    });


    contactdiv.appendChild(phone)
    contactdiv.appendChild(address)
    contactdiv.appendChild(mapwrapper)
    document.querySelector('#content').appendChild(footer)
})();
export default contact;