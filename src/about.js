import age1 from './pageImages/young.jpg'
import age2 from './pageImages/lessyoung.jpg'
import age3 from './pageImages/middle.jpg'
import age4 from './pageImages/middleold.jpg'
import age5 from './pageImages/old.jpg'
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
let about = () => {
    let aboutwrapper = document.createElement('div')
    aboutwrapper.classList.add("about-wrapper")
    let header = document.createElement('h1')
    let aboutSwiper = document.createElement('div')
    aboutSwiper.classList.add('mySwiper')
    let swiperWrapper = document.createElement('div')
    swiperWrapper.classList.add('swiper-wrapper')
    let swiperPag = document.createElement('div')
    swiperPag.classList.add('swiper-pagination')
    let aboutparagraph = document.createElement('p')
    header.innerText = "About the Chef"
    aboutparagraph.innerText = "Nathan Fox is a young chef from Northern Virginia, with years of experience across different cuisines, cooking styles, and sources. With Michellin stars in his past, Nate has decided to focus on bringing people the food that is part of their environment. With some of his earliest memories being formed picking lima beans in the family garden, this feels like coming home. Excited to shine the spotlight on the wonderful experiences that come from his community, Nate is ready to embrace Sharton"
    aboutwrapper.appendChild(header)
    aboutwrapper.appendChild(aboutparagraph)
    aboutwrapper.appendChild(aboutSwiper)
    aboutSwiper.appendChild(swiperWrapper)
    aboutSwiper.appendChild(swiperPag)
    document.querySelector('#content').appendChild(aboutwrapper)
};

let carosel = () => {
    const swiper = new Swiper('.mySwiper', {

        // // If we need pagination
        // pagination: {
        //     el: '.swiper-pagination',
        // },

        // // Navigation arrows
        // navigation: {
        //     nextEl: '.swiper-button-next',
        //     prevEl: '.swiper-button-prev',
        // },

        // // And if we need scrollbar
        // scrollbar: {
        //     el: '.swiper-scrollbar',
        // },
    });

}

let picLibrary = [age1, age2, age3, age4, age5]

let caroselPics = () => {
    for (let i = 0; i <= 4; i++) {

        let agePic = document.createElement('img')
        agePic.classList.add('swiper-slide')
        agePic.setAttribute("src", picLibrary[i])
        document.querySelector('.swiper-wrapper').appendChild(agePic)
    }
    let swiperdesc = document.createElement('p')
    swiperdesc.innerText = "Chef Fox through the years"
    document.querySelector('.about-wrapper').appendChild(swiperdesc)
}

let aboutContent = () => {
    about()
    carosel()
    caroselPics()
}

export default aboutContent
//H1 About the Chef
//"Nathan Fox is a young chef from Northern Virginia, with years of experience across different cuisines, cooking styles, and sources. With Michellin stars in his past, Nate has decided to focus on bringing people the food that is part of their environment. With some of his earliest memories being formed picking lima beans in the family garden, this feels like coming home. Excited to shine the spotlight on the wonderful experiences that come from his community, Nate is ready to embrace Sharton"