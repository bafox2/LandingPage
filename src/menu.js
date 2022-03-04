//maybe make cards based off an object 
//maybe add those objects to an array and create the items automatically

import beets from './pageImages/beetgarden.jpg'
import spring from './pageImages/beandish.jpg'
import caviar from './pageImages/caviar.jpg'
import oragami from './pageImages/oragami.jpg'
import orange from './pageImages/orangedelight.jpg'
//a
import quail from './pageImages/quailegg.jpg'
import italian from './pageImages/proscuetto.jpg'

const itemFactory = (name, desc, season, image) => {

    return { name, desc, season, image };
};

let item1 = itemFactory("Beet Sunrise", "Hand dug beets sliced to precision and prepared with a vinigrette", "Spring", beets)
let item2 = itemFactory("Spring's Bounty", "Carefully molded into a freshly bloomed sapling, this dish reflects the freshness of the season", "Spring", spring)
let item3 = itemFactory("Caviar", "Sourced locally, caviar from a local farm near Higginsville", "All", caviar)
let item4 = itemFactory("Oragami Surprise", "Inspired by the Japanese craft, this ginger dish delights in design and taste", "Fall", oragami)
let item5 = itemFactory("Orange Delight", "Little known citrus farm 'Durotar Harvest' delivers our fruit daily, and is showcased here", "Summer", orange)
let item6 = itemFactory("Little Italy", "Proscuetto, melon, and an apple glazed yoghurt star in this Italian inspired special", "Spring", italian)
let item7 = itemFactory("Quail Egg", "Stolen right from the nest, you can't have a more fresh taste", "Spring", quail)


let menu = []
menu.push(item1, item2, item3, item4, item5, item6, item7)

let getMenu = () => {
    for (let i = 0; i < 7; i++) {
        let card = document.createElement("card")
        card.classList.add("menuitem")
        let foodname = document.createElement("h1")
        let fooddesc = document.createElement("p")
        let season = document.createElement('span')
        let foodpic = document.createElement('img')
        foodname.innerText = menu[i].name
        fooddesc.innerText = menu[i].desc
        season.innerText = menu[i].season
        foodpic.setAttribute("src", menu[i].image)
        card.append(foodname, fooddesc, season, foodpic)
        document.querySelector('#content').appendChild(card)

    }
}
export { getMenu }