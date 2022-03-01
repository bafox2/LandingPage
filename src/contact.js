// import { Loader } from '@googlemaps/js-api-loader';



let contact = (() => {
    let contactdiv = document.createElement('div')
    contactdiv.classList.add("contact");
    let phone = document.createElement('p')
    phone.innerText = "703-555-5555"
    let address = document.createElement('p')
    address.innerText = "408 W St Clair Ave, Cleveland, OH 44113"
    let mapwrapper = document.createElement('div')
    mapwrapper.id = ('map')

    // const loader = new Loader({
    //     apiKey: "AIzaSyCO_zgzQPLw8QumirmZWjHwgRDFrdIMooM",
    //     version: "weekly",
    //     libraries: ["places"]
    // });
    // const mapOptions = {
    //     center: {
    //         lat: 0,
    //         lng: 0
    //     },
    //     zoom: 4
    // };
    // loader.load()
    //     .then((google) => {
    //         new google.maps.Map(document.getElementById("map"), mapOptions);
    //     })
    //     .catch(e => {
    //         // do something
    //     });

    contactdiv.appendChild(phone)
    contactdiv.appendChild(address)
    contactdiv.appendChild(mapwrapper)
    document.querySelector('body').appendChild(contactdiv)
})();
export default { contact };