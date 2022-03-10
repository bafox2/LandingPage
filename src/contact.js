const loadGoogleMapsApi = require('load-google-maps-api');


let mapWorking = () => {
    loadGoogleMapsApi().then(function(googleMaps) {
        new googleMaps.Map(document.querySelector('#map'), {
            center: {
                lat: 41.500140,
                lng: -81.698320
            },
            zoom: 12
        })
    }).catch(function(error) {
        console.error(error)
    })
}

function contact() {
    let contactdiv = document.createElement('div')
    contactdiv.classList.add("contact");
    let hours = document.createElement('p')
    hours.innerText = "Hours: Open from 4:00 to sunset, closed on Tuesday"
    let phone = document.createElement('p')
    phone.innerText = "703-555-5555"
    let address = document.createElement('p')
    address.innerText = "408 W St Clair Ave, Cleveland, OH 44113"
    let mapwrapper = document.createElement('div')
    mapwrapper.id = ('map')


    contactdiv.appendChild(hours)
    contactdiv.appendChild(phone)
    contactdiv.appendChild(address)
    contactdiv.appendChild(mapwrapper)
    document.querySelector('#content').appendChild(contactdiv)
};

let mapContent = () => {
    contact()
    mapWorking()
}


export default mapContent