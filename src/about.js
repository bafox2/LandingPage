import age1 from './pageImages/young.jpg'
import age2 from './pageImages/lessyoung.jpg'
import age3 from './pageImages/middle.jpg'
import age4 from './pageImages/middleold.jpg'
import age5 from './pageImages/old.jpg'

let about = () => {
    let aboutwrapper = document.createElement('div')
    let header = document.createElement('h1')
    let aboutparagraph = document.createElement('p')
    header.innerText = "About the Chef"
    aboutparagraph.innerText = "Nathan Fox is a young chef from Northern Virginia, with years of experience across different cuisines, cooking styles, and sources. With Michellin stars in his past, Nate has decided to focus on bringing people the food that is part of their environment. With some of his earliest memories being formed picking lima beans in the family garden, this feels like coming home. Excited to shine the spotlight on the wonderful experiences that come from his community, Nate is ready to embrace Sharton"
    aboutwrapper.appendChild(header)
    aboutwrapper.appendChild(aboutparagraph)
    document.querySelector('#content').appendChild(aboutwrapper)
};
export default { about }
//H1 About the Chef
//"Nathan Fox is a young chef from Northern Virginia, with years of experience across different cuisines, cooking styles, and sources. With Michellin stars in his past, Nate has decided to focus on bringing people the food that is part of their environment. With some of his earliest memories being formed picking lima beans in the family garden, this feels like coming home. Excited to shine the spotlight on the wonderful experiences that come from his community, Nate is ready to embrace Sharton"